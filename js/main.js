$(document).ready(function() {

  const URL = 'https://api.github.com/users';
  const USER = 'TheLukeRussell';
  const USER_URL = 'https://api.github.com/users/thelukerussell'
  // const GITHUB_API_KEY = '775e45a998307284b1a9616dc6004bb1bffdea8f'
  // console.log(GITHUB_API_KEY);
  $.ajax({
    url: 'https://api.github.com/users/thelukerussell',
    Authorization: `token ${GITHUB_API_KEY}`
    })
    .done((resp) => {
      updateOrgs(resp);
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
    let bioInfo = [{
      avatar: user.avatar_url,
      login: user.login,
      location: user.location,
      name: user.name,
      updated_at: user.updated_at,
      organizatons_url: user.organizatons_url
    }]
    console.log(bioInfo);
    displayBio(bioInfo);

  });

  let displayBio = (bioInfo) => {
    let source = $('#bioTemplate').html();
    let template = Handlebars.compile(source)
    $('#bio').html(template(bioInfo));
  };


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
