$(document).ready(function() {

  const BASE_URL = 'https://api.github.com/users';
  const USER = 'thetukerussell';
  const CLIENT_ID = 'ac4982b5e60293a2e5c1'
  const CLIENT_SECRET = 'bbd445fe98af3d6d4c283efa15d1e48ac3d954f3'

  // const GITHUB_API_KEY = '775e45a998307284b1a9616dc6004bb1bffdea8f'
  // console.log(GITHUB_API_KEY);

  $.ajax({
      url: `https://api.github.com/users/thelukerussell?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    })
    .done((resp) => {
      // updateOrgs(resp);
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      // console.log('always fires');
    });

  let updateOrgs = (orgs) => {
    // console.log(orgs.login)
  }

  $.ajax('https://api.github.com/users/thelukerussell')
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

  $.ajax('https://api.github.com/users/thelukerussell/repos').done((data) => {
    console.log(data);
    displayRepos(repoList);
  })

  let displayRepos = (repoList) => {
    let source = $('repo-template').html();
    let template = Handlebars.compile(source);


    $('#repoList').html(template({repos: repoList}));
  };

  let displayOrgs = (orgInfo) => {
    let source = $('org-temp').html();
    let template = Handlebars.compile(source);

    $('#org-list').html(template(repoList));
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
