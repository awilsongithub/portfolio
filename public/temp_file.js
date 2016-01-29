
// copychef call/link
<a href="/recipes/individual/<%= _id %>" target="_blank">
// change to /

// port call
<a href="#/project/<%= _id %>">



// copy chef route
router.get('/individual/:id', function(req, res, next) {
  var data = siteData;
  data.user = req.user;
  model.findById(req.params.id, function (err, recipe){
    if (err) console.log(err);
    console.log(recipe);
    res.render('individualrecipe', recipe);
  });
  // res.render('practice', data);
});
