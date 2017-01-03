var collabAppData = {
  roomName: {
    title: 'Room Name',
    description: 'Change the details of this chatroom here'
  },

  roles: {
    description: 'Eu nulla morbi, eros placerat mattis lectus',
    team: [{
      name: 'Alex Miller',
      roleTitle: 'Product Manager'
    }, {
      name: 'James Morrison',
      roleTitle: '3D Animator'
    }, {
      name: 'Miranda Lopez',
      roleTitle: 'Concept Artist'
    }, {
      name: 'Alex Miller',
      roleTitle: 'Product Manager'
    }]
  },

  colors: {
    description: 'These colors are for the entire room',
    schemes: [{
      component: 'Application',
      detail: 'The general color used for the application',
      colorCode: '#DD77CB'
    }, {
      component: 'Box Value',
      detail: 'The value of message backgrounds',
      colorCode: '#6C84DC'
    }, {
      component: 'Text Color',
      detail: 'The message text color',
      colorCode: '#8D8D8D'
    }]
  },

  // panels
  chatPanel: {
    isVisible: true,
    messageList: [{
      id: 1,
      userName: 'Alexander Smith',
      userPhoto: 'A_Smith.jpg',
      timeStamp: 'Tue 3 Jan 2017 13:30:00 GMT',
      body: "I noticed it yesterday only, and before reading your article. I wonder if they aren't only now starting to roll it out completely (and maybe coded the feature back in November)."
    }, {
      id: 2,
      userName: 'Anna Pearson',
      userPhoto: 'A_Pearson.jpg',
      timeStamp: 'Tue 3 Jan 2017 13:34:00 GMT',
      body: "This is important stuff. Does it have a Wikipedia entry yet?"
    }, {
      id: 3,
      userName: 'James Morrison',
      userPhoto: 'J_Morrison.jpg',
      timeStamp: 'Tue 3 Jan 2017 13:35:00 GMT',
      body: "It's there from a long time...... 2+ years back, I came to know about this via littlebigdetails.com"
    }, {
      id: 4,
      userName: 'Alexander Smith',
      userPhoto: 'A_Smith.jpg',
      timeStamp: 'Tue 3 Jan 2017 13:41:00 GMT',
      body: "Video testimonials can be recorded from anywhere with the Modulates video recorder and then uploaded from anywhere."
    }]
  },

  screenSharingPanel: {
    isVisible: true
  },

  codeEditorPanel: {
    isVisible: true
  }

};

