define({ "api": [
  {
    "type": [
      "post"
    ],
    "url": "/auth/login",
    "title": "Request For Login",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "login params",
          "content": "{\n    \"userName\":\"foo\",\n    \"password\":\"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>User detail.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Bearer Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    user:{\n        id:1,\n    },\n    token : <bearer-token>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/auth.controller.ts",
    "groupTitle": "Auth"
  },
  {
    "type": [
      "post"
    ],
    "url": "/auth/signup",
    "title": "Request For register",
    "name": "Signup",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "signup params",
          "content": "{\n    \"userName\":\"foo\",\n    \"password\":\"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>User detail.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Bearer Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    user:{\n        id:1,\n    },\n    token : <bearer-token>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/auth.controller.ts",
    "groupTitle": "Auth"
  },
  {
    "type": [
      "put"
    ],
    "url": "/auth/update",
    "title": "Request For update authentication",
    "name": "Update_Auth",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "update params",
          "content": "{\n    \"userName\":\"foo\",\n    \"password\":\"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for updating successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    status:ok\n    code:2004,\n    message: update successful\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/auth.controller.ts",
    "groupTitle": "Auth"
  },
  {
    "type": [
      "websocket"
    ],
    "url": "*",
    "title": "Username Exist",
    "name": "username_check",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "on",
            "optional": false,
            "field": "validateUserName",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "emit",
            "optional": false,
            "field": "userNameExist",
            "description": "<p>Required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "send params",
          "content": "{\n    \"userName\":\"foo\",\n}",
          "type": "json"
        }
      ]
    },
    "group": "Auth",
    "description": "<p>check Username exist on db or not</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"userNameExist\": ture or false\n}",
          "type": "json"
        }
      ]
    },
    "websocket": {
      "cmd": null,
      "func": null,
      "url": "ws://127.0.0.1:9000"
    },
    "version": "0.0.0",
    "filename": "src/libs/SocektIo.ts",
    "groupTitle": "Auth"
  },
  {
    "type": [
      "post"
    ],
    "url": "/channel/create",
    "title": "create new channel",
    "name": "Create_Channel",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>notRequired- default {lastname}'s channel</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPrivate",
            "description": "<p>notRequired - default false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "create params",
          "content": "{\n    \"title\":\"foo\",\n    \"isPrivate\":true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Channel detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                     {\n\"status\": 200,\n\"code\": 3000,\n\"message\": \"ok\",\n\"data\": {\n   \"id\": \"96a59718-e4a3-4c24-8854-9d21c63921a9\",\n   \"ownerId\": \"dfaea371-f40d-4ea1-aed5-20dec2165c7f\",\n    \"isPrivate\": false,\n    \"updatedAt\": \"2020-12-08T11:51:48.796Z\",\n   \"createdAt\": \"2020-12-08T11:51:48.796Z\",\n   \"title\": \"{lastname}'s Channel\",\n   \"deletedAt\": null\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "server-error",
            "description": "<p>many defrent error can be responsed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 internal server error\n {\n   status: 'error',\n   code:2001 ,\n   message: this is an error\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/Channel.controller.ts",
    "groupTitle": "Channel"
  },
  {
    "type": [
      "delete"
    ],
    "url": "/channel/remove/:channelId",
    "title": "Delete Channel",
    "name": "Delete_Channel",
    "group": "Channel",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>update was successfu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                     {\n\"status\": 200,\n\"code\": 3004,\n\"message\": \"Deletion was successful\",\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "Bad-Request",
            "description": "<p>many defrent error can be responsed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n   status: 'error',\n   code:2001 ,\n   message: \"unable to delete\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/Channel.controller.ts",
    "groupTitle": "Channel"
  },
  {
    "type": [
      "get"
    ],
    "url": "/channel/list/:userName",
    "title": "Get List Of Channeles",
    "name": "Get_User_Channels_Public",
    "group": "Channel",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>List of Channels detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                     {\n\"status\": 200,\n \"code\": 3000,\n\"message\": \"ok\",\n\"data\": {\n  \"channels\": [\n     {\n        \"id\": \"acb002d5-daf5-48f1-9ea5-914dd5504d11\",\n       \"title\": \"daneshjoo's Channel\",\n      \"isPrivate\": false,\n     \"createdAt\": \"2020-12-08T09:20:02.665Z\",\n    \"updatedAt\": \"2020-12-08T09:20:02.665Z\",\n   \"deletedAt\": null\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "not-Found",
            "description": "<p>many defrent error can be responsed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n {\n   status: 'error',\n   code:1001 ,\n   message: Not found\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/Channel.controller.ts",
    "groupTitle": "Channel"
  },
  {
    "type": [
      "get"
    ],
    "url": "/channel/list/",
    "title": "Get List Of Channeles need auth",
    "name": "Get_User_Channels_private",
    "group": "Channel",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>List of Channels detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                     {\n\"status\": 200,\n \"code\": 3000,\n\"message\": \"ok\",\n\"data\": {\n  \"channels\": [\n     {\n        \"id\": \"acb002d5-daf5-48f1-9ea5-914dd5504d11\",\n       \"title\": \"daneshjoo's Channel\",\n      \"isPrivate\": false,\n     \"createdAt\": \"2020-12-08T09:20:02.665Z\",\n    \"updatedAt\": \"2020-12-08T09:20:02.665Z\",\n   \"deletedAt\": null\n},\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "not-Found",
            "description": "<p>many defrent error can be responsed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NotFound\n {\n   status: 'error',\n   code:1001 ,\n   message: Not found\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/Channel.controller.ts",
    "groupTitle": "Channel"
  },
  {
    "type": [
      "put"
    ],
    "url": "/channel/update/:channelId",
    "title": "Update Channel",
    "name": "Update_Channel",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>notRequired</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPrivate",
            "description": "<p>notRequired</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "create params",
          "content": "{\n    \"title\":\"foo\",\n    \"isPrivate\":true\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "Bearer",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>update was successfu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "                     {\n\"status\": 201,\n\"code\": 3000,\n\"message\": \"update was successfu\",\n\"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "server-error",
            "description": "<p>many defrent error can be responsed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 internal server error\n {\n   status: 'error',\n   code:2001 ,\n   message: this is an error\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/Channel.controller.ts",
    "groupTitle": "Channel"
  },
  {
    "type": [
      "post"
    ],
    "url": "/user/info",
    "title": "Request for saving user info",
    "name": "save_Personal_info",
    "group": "user_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "login params",
          "content": "{\n    \"userName\":\"foo\",\n    \"password\":\"bar\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>User detail.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Bearer Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    user:{\n        id:1,\n    },\n    token : <bearer-token>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/v1/http/controllers/User.controller.ts",
    "groupTitle": "user_info"
  }
] });
