var app = require('../../server/server');

module.exports = function(TransactionComposer) {
    TransactionComposer.compose = function(msg, cb) {
        /* 1. Create Transaction */
        var Transaction = app.models.Transaction;
        Transaction.create(msg.transaction)
            .then(function(result) {
                var txId = result.id;
                /* 2. Update Account (new balance) */
                var Account = app.models.Account;
                Account.upsert(msg.account)
                    .then(function(result) {
                        /* 3. Create Subtransactions */
                        for (var i = 0; i < msg.subtransactions.length; i++) {
                            msg.subtransactions[i].transactionId = txId;
                        };
                        var Subtransaction = app.models.Subtransaction;
                        Subtransaction.upsert(msg.subtransactions,
                            function(err, subtransactions) {
                                if (err) throw (err);
                                /* 4. Update Subaccounts (new balance) */
                                var Subaccount = app.models.Subaccount;
                                for (var i = 0; i < msg.subaccounts.length; i++) {
                                    Subaccount.upsert(msg.subaccounts[i]);
                                }
                                cb();
                            });
                    })
                    .catch(function(err) {
                        console.log("Update Account error: " + err);
                    });
            })
            .catch(function(err) {
                console.log("Create Transaction error: " + err);
            });
    };

    TransactionComposer.remoteMethod(
        'compose', {
            accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
            description: [
                "Gets the Transaction Composer object.",
                " 1. Creates a Transaction model.",
                " 2. Updates account with new balance.",
                " 3. Creates Subtransactions for the subaccounts.",
                " 4. Updates subaccounts with new balance."
            ],
            http: { path: '/compose', verb: 'post', status: 200, errorStatus: 400 }
        }
    );

};
