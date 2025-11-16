// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "click": "#start"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Screen",
      "content": "\u003Cdiv style=\"text-align: center; margin-top: 50px;\"\u003E\r\n  \u003Cbutton id=\"start\"\u003E Старт\u003C\u002Fbutton\u003E\r\n  Ваша задача - быстро нажимать на кнопку, ближайшую к овалу -кнопки названы ДА и НЕТ).\r\n\u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "trial_id": 1,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 2,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 3,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 4,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 5,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 6,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 7,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 8,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 9,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 10,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 11,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 12,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 13,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 14,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 15,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 16,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 17,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 18,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 19,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 20,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 21,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 22,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 23,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 24,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 25,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 26,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 27,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 28,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 29,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 30,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 31,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 32,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 33,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 34,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 35,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 36,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 37,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 38,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 39,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 40,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 41,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 42,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 43,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 44,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 45,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 46,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 47,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 48,
          "stimulus_type": "B",
          "question": "____________0",
          "correct_response": "НЕТ"
        },
        {
          "trial_id": 49,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        },
        {
          "trial_id": 50,
          "stimulus_type": "A",
          "question": "0____________",
          "correct_response": "ДА"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "50"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 52.56,
                "height": 101.7,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "90",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "600",
            "skip": "${parameters.stimulus_type == 'A'}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 984,
                "height": 650,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"линия.png\"] }"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 51.39,
                "height": 99.44,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "88",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "линия.png": "embedded\u002Ffba61cc6758fad54311acbf9747e14b978c4bae94e7a50353bc882ea15557876.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "timeout": "600",
            "skip": "${parameters.stimulus_type == 'B'}"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "click #yes_btn": "ДА",
              "click #no_btn": "НЕТ"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Screen",
            "content": "\u003Cdiv style=\"text-align: center; padding: 100px;\"\u003E\r\n  \u003Ch2 style=\"font-size: 100px;\"\u003E${parameters.question}\u003C\u002Fh2\u003E\r\n  \u003Cdiv style=\"margin-top: 100px;\"\u003E\r\n    \u003Cbutton id=\"no_btn\" style=\"font-size: 50px; margin: 20px;\"\u003EНЕТ\u003C\u002Fbutton\u003E\r\n    \u003Cbutton id=\"yes_btn\" style=\"font-size: 50px; margin: 20px;\"\u003EДА\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
            "correctResponse": "ДА"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()