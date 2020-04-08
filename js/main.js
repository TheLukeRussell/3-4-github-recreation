$(document).ready(function() {

  const BASE_URL = 'https://api.github.com/users';
  const USER = 'thetukerussell';

  const CLIENT_ID = 'ac4982b5e60293a2e5c1'
  const CLIENT_SECRET = '9febc6164e901bedc7658ed28f566142989ebf6e'


  $.ajax(`https://api.github.com/users/thelukerussell?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  $.ajax('https://api.github.com/users/thelukerussell')

    .done((resp) => {
      // updateOrgs(resp);
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      // console.log('always fires');
    });

  // profile bio *************************************
  $.ajax('https://api.github.com/users/thelukerussell')
  $.ajax(`https://api.github.com/users/thelukerussell?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .done((resp) => {
      // console.log(info);
      let bioInfo = {
        avatar: resp.avatar_url,
        login: resp.login,
        location: resp.location,
        name: resp.name,
        updated_at: resp.updated_at,
      }
      // console.log(bioInfo);
      displayBio(bioInfo);
    });

  let displayBio = (bioInfo) => {
    let source = $('#bioTemplate').html();
    let template = Handlebars.compile(source)
    $('#bio').html(template(bioInfo));
  };

  // navbar *************************************
  $.ajax('https://api.github.com/users/thelukerussell')
  $.ajax(`https://api.github.com/users/thelukerussell?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
    .done((resp) => {
      // console.log(info);
      let navInfo = {
        followers: resp.followers,
        following: resp.following,
        repos: resp.public_repos,
      }
      // console.log(bioInfo);
      displayNav(navInfo);
    });

  let displayNav = (navInfo) => {
    let source = $('#navTemplate').html();
    let template = Handlebars.compile(source)
    $('#nav').html(template(navInfo));
  };

  // repos ********************************************
$.ajax('https://api.github.com/users/thelukerussell/repos')
  $.ajax(`https://api.github.com/users/thelukerussell/repos?
client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)

    .done((resp) => {

      // console.log(resp);
      Handlebars.registerHelper('formatDate', function(date) {
        return new Handlebars.SafeString(
          moment(date).fromNow("MMM D").toLowerCase()
        );
      });

      displayRepos(resp);
    })

  let displayRepos = (reposData) => {
    let source = $('#repo-template').html();

    let template = Handlebars.compile(source);
    $('#repo-list').html(template({
      repos: reposData
    }));

  };


  // orgs **********************************************
  $.ajax(`https://api.github.com/users/thelukerussell/orgs?
  client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  $.ajax('https://api.github.com/users/thelukerussell/orgs')
    .done((resp) => {
      // console.log(resp);
      displayOrgs(resp);
    })
  let displayOrgs = (orgsData) => {
    let source = $('#org-temp').html();
    let template = Handlebars.compile(source);

    $('#orgs-list').html(template({
      orgs: orgsData
    }));
  }


  // let context = {
  //   repos: resp.data
  // }
  // let source = $ {
  //   '#bioTemplate'
  // }.html();
  // let template = Handlebars.compile(source);
  // $ {
  //   '#bio'
  // }.html(template(context)); //'bio' is left bio col ID


});
