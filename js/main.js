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

  $.ajax('https://api.github.com/users/thelukerussell').done((user) => {
    // console.log(info);
    let bioInfo = {
      avatar: user.avatar_url,
      login: user.login,
      location: user.location,
      name: user.name,
      updated_at: user.updated_at,
      organizatons_url: user.organizatons_url
    }
    console.log(bioInfo);
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


  $('#repoList').html(template(repo));
};

let displayOrgs = (orgInfo) => {
  let source = $('org-temp').html();
  let template = Handlebars.compile(source);

  $('#org-list').html(template(repo));
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
