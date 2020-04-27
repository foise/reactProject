var testQuestions = [
  {
      question: "Door",
      answers: [
          {
            point: "1", // point для определения правильного ответа
            content: "Дверь"
          },
          {
            point: "0",
            content: "Проход"
          },
          {
            point: "0",
            content: "Стена"
          },
          {
            point: "0",
            content: "Стул"
          }
      ]
  },
  {
      question: "Wall",
      answers: [
        {
            point: "1",
            content: "Стена"
        },
        {
            point: "0",
            content: "Пол"
        },
        {
            point: "0",
            content: "Потолок"
        },
        {
            point: "0",
            content: "Дверь"
        }
      ]
  },
  {
      question: "Bottle",
      answers: [
        {
            point: "1",
            content: "Бутылка"
        },
        {
            point: "0",
            content: "Тарелка"
        },
        {
            point: "0",
            content: "Стакан"
        },
        {
            point: "0",
            content: "Чашка"
        }
      ]
  },
  {
      question: "Phone",
      answers: [
        {
            point: "1",
            content: "Телефон"
        },
        {
            point: "0",
            content: "Лампа"
        },
        {
            point: "0",
            content: "Зеркало"
        },
        {
            point: "0",
            content: "Микрофон"
        }
      ]
  },
  {
    question: "Ladder",
    answers: [
        {
            point: "1",
            content: "Лестница"
        },
        {
            point: "0",
            content: "Кнопка"
        },
        {
            point: "0",
            content: "Звонок"
        },
        {
          point: "0",
          content: "Крышка"
      }
    ]
  },
  {
    question: "Tree",
    answers: [
        {
            point: "1",
            content: "Дерево"
        },
        {
            point: "0",
            content: "Лист"
        },
        {
            point: "0",
            content: "Трава"
        },
        {
          point: "0",
          content: "Листва"
      }
    ]
  },
  {
    question: "Fire",
    answers: [
        {
            point: "1",
            content: "Огонь"
        },
        {
            point: "0",
            content: "Вода"
        },
        {
            point: "0",
            content: "Земля"
        },
        {
          point: "0",
          content: "Воздух"
      }
    ]
  },
  {
    question: "Arm",
    answers: [
        {
            point: "1",
            content: "Рука"
        },
        {
            point: "0",
            content: "Ладонь"
        },
        {
            point: "0",
            content: "Локоть"
        },
        {
          point: "0",
          content: "Плечо"
      }
    ]
  },
  {
    question: "Tongue",
    answers: [
        {
            point: "1",
            content: "Язык"
        },
        {
            point: "0",
            content: "Глаз"
        },
        {
            point: "0",
            content: "Рот"
        },
        {
          point: "0",
          content: "Нос"
      }
    ]
  },
  {
    question: "Letter",
    answers: [
        {
            point: "1",
            content: "Буква"
        },
        {
            point: "0",
            content: "Слово"
        },
        {
            point: "0",
            content: "Число"
        },
        {
          point: "0",
          content: "Звук"
      }
    ]
  }
];

export default testQuestions;
