class UsersController {
    
    list(req, res) {
        console.log('got req');

        res.json([]);
    }

    get(req, res) {
        const id = Number(req.params.id);
        console.log('got req for one user with id ' + id);

        res.json({
            id
        });
    }

    add(req, res) {
        const data = req.body;
        console.log('got req for add user', data);
        data.id = Date.now();

        res.json(data);
    }

    update(req, res) {
        const data = req.body;
        console.log('got req for update user', data);
        
        res.json(data);
    }
    
    delete(req, res) {
        const id = Number(req.params.id);
        console.log('got req for delete user', id);
        
        res.json({id});
    }
}

module.exports = new UsersController;