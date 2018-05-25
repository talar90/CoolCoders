//To get all WALLETS
function walletController(router) {
    
    router.get("/allwallets", (req, res) => {
        Wallet.find()
        .then(wallets => {
            res.json(wallets);
        })
        .catch(err => {
        res.status(404).json(err);
    });
});

  //@To create WALLET
  router.post("/addwallet", (req, res) => {
      var wallet = new Wallet(req.body);
    wallet
    .save()
    .then(savedWallet => {
        res.json(savedWallet);
      })
      .catch(err => {
          res.status(404).send(err);
        });
    });
    
    //@To edit WALLET
  router.put("/editwallet/:id", (req, res) => {
    wallet.findById(req.params.id)
    .then(Wallet => {
        wallet.name = req.body.name;
        wallet.group = req.body.group;
        wallet.coins = req.body.coins;
        wallet
        .save()
        .then(result => {
            res.send(result);
        })
        .catch(err => res.send(res));
    })
    .catch(err => {
        res.status(404).send(err);
    });
});
  
//@To delete WALLET
router.delete("/deletewallet/:id", (req, res) => {
    Wallet.findByIdAndRemove(req.params.id)
    .then(result => {
        res.send(result);
    })
    .catch(err => res.send(err));
});
  
}
module.exports=walletController;