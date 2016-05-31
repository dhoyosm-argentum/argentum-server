module.exports = function(app) {
    /*
    var Client = app.models.Client;

    Client.create([{
        email: 'admin@admin.com',
        firstName: 'Admin',
        lastName: 'Admin',
        password: '123456'
    }, {
        email: 'test@email.com',
        firstName: 'Test',
        lastName: 'Test',
        password: '123456'
    }, {
        email: 'dhoyosm@gmail.com',
        firstName: 'Daniel',
        lastName: 'Hoyos',
        password: '123456'
    }], function(err, clients) {
        if (err) throw (err);
        // Create the admin role
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        Role.create({
            name: 'admin'
        }, function(err, role) {
            if (err) throw (err);

            // Make admin an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: clients[0].id
            }, function(err, principal) {
                if (err) throw (err);
            });
        });
    });
//*/
/*
    var Client = app.models.Client;

    Client.create([{
        id: '0',
        email: 'admin@admin.com',
        firstName: 'Admin',
        lastName: 'Admin',
        password: '123456'
    }, {
        id: '1',
        email: 'test@email.com',
        firstName: 'Test',
        lastName: 'Test',
        password: '123456'
    }, {
        email: 'dhoyosm@gmail.com',
        firstName: 'Daniel',
        lastName: 'Hoyos',
        password: '123456'
    }], function(err, clients) {
        if (err) throw (err);
        // Create the admin role
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;
        Role.create({
            name: 'admin'
        }, function(err, role) {
            if (err) throw (err);

            // Make admin an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: clients[0].id
            }, function(err, principal) {
                if (err) throw (err);

                // Create Account
                var Account = app.models.Account;
                Account.create({
                    name: 'Test Account 1',
                    notes: 'Some notes here.',
                    type: 'Savings',
                    clientId: '1'
                }, function(err, account) {
                    if (err) throw (err);
                });
            });
        });
    });
*/
    /*
        var MongoDB = app.dataSources.MongoDB;

        MongoDB.automigrate('Client', function(err) {
            if (err) throw (err);
            var Client = app.models.Client;

            Client.create([{
                firstName: 'Admin',
                lastName: 'Admin',
                email: 'admin@admin.com',
                password: '123456'
            }], function(err, users) {
                if (err) return cb(err);
                var Role = app.models.Role;
                var RoleMapping = app.models.RoleMapping;

                //create the admin role
                Role.create({
                    name: 'admin'
                }, function(err, role) {
                    if (err) cb(err);
                    //make admin
                    role.principals.create({
                        principalType: RoleMapping.USER,
                        principalId: users[0].id
                    }, function(err, principal) {
                        if (err) throw (err);
                    });
                });
            });
        });
    */
};
