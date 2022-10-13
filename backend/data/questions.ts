const questions = [
  {
    statement:
      'Rohit walked 25 meters towards South. Then he turned to his left and walked 20 meters. He then turned to his left and walked 25 meters. He again turned to his right and walked 15 meters. At what distance is he from the starting point and in which direction?',
    answer: 'a',
    explanation: `Rohit's distance from the starting point A would be:
    AE = AD+DE = 20 + 15 = 35m East`,
    options: [
      {
        value: 'a',
        text: '35m East',
      },
      {
        value: 'b',
        text: '35m North',
      },
      {
        value: 'c',
        text: '40m East',
      },
      {
        value: 'd',
        text: '60m East',
      },
    ],
  },
  {
    statement:
      'Sagar was riding bike towards north, turned left road 1 km turns towards left & road 2 kms found himself 1 km west of starting. How far did he road north?',
    answer: 'b',
    explanation: `He travelled total distance of 3 kms.
    From which he travelled 1 km in west.
    Hence in all he travelled total 2 kms in north.`,
    options: [
      {
        value: 'a',
        text: '1.5 KMs',
      },
      {
        value: 'b',
        text: '2 KMs',
      },
      {
        value: 'c',
        text: '3 KMs',
      },
      {
        value: 'd',
        text: '3.5 KMs',
      },
    ],
  },
  {
    statement:
      'Walking 7/6 of his usual rate, a boy reaches his school 4 minutes early. Find his usual time to reach the school?',
    answer: 'c',
    explanation: `Speed Ratio = 1:7/6 = 6:7
    Time Ratio = 7:6
    1 -------- 7
    4 -------- ? => 28 mins`,
    options: [
      {
        value: 'a',
        text: '24 mins',
      },
      {
        value: 'b',
        text: '26 mins',
      },
      {
        value: 'c',
        text: '28 mins',
      },
      {
        value: 'd',
        text: '30 mins',
      },
    ],
  },
  {
    statement:
      'If a man can cover 12 metres in one second, how many kilometres can he cover in 3 hours 45 minutes?',
    answer: 'c',
    explanation: `12 m/s = 12 * 18/5 kmph
    3 hours 45 minutes = 3 3/4 hours = 15/4 hours
    Distance = speed * time = 12 * 18/5 * 15/4 km = 162 kms`,
    options: [
      {
        value: 'a',
        text: '150 KMs',
      },
      {
        value: 'b',
        text: '156 KMs',
      },
      {
        value: 'c',
        text: '162 KMs',
      },
      {
        value: 'd',
        text: '168 KMs',
      },
    ],
  },
  {
    statement:
      'Nikita takes as much time in running 18 meters as a car takes in covering 48 meters. What will be the distance covered by Nikita during the time the car covers 1.6 km?',
    answer: 'c',
    explanation: `Distance covered by Amar = 18/4.8 (1.6km)
    = 3/8(1600) = 600 m`,
    options: [
      {
        value: 'a',
        text: '480 m',
      },
      {
        value: 'b',
        text: '520 m',
      },
      {
        value: 'c',
        text: '600 m',
      },
      {
        value: 'd',
        text: '800 m',
      },
    ],
  },
  {
    statement:
      'Which of the following languages are directly executable by a computer’s CPU?',
    answer: 'a',
    explanation:
      'Machine languages are directly executable by a computer’s CPU.',
    options: [
      {
        value: 'a',
        text: 'Machine Language',
      },
      {
        value: 'b',
        text: 'High Level Langyage',
      },
      {
        value: 'c',
        text: 'Assembly Language',
      },
      {
        value: 'd',
        text: 'Second generation Language',
      },
    ],
  },
  {
    statement:
      'Which company had developed the software development process framework called “Rational Unified Process” or RUP?',
    answer: 'b',
    explanation: `Rational Unified Process (RUP) is an iterative software development process framework created by the Rational Software Corporation, a division of IBM since 2003.`,
    options: [
      {
        value: 'a',
        text: 'Microsoft',
      },
      {
        value: 'b',
        text: 'IBM',
      },
      {
        value: 'c',
        text: 'Compaq',
      },
      {
        value: 'd',
        text: 'None of these',
      },
    ],
  },
  {
    statement:
      'Which among the following is the most common source of Viruses to the hard disk of your computer?',
    answer: 'a',
    explanation: `Incoming emails is the most common source of Viruses to the hard disk of a computer. Hackers are using e mail for attacking a computer. The incoming email is the most vulnerable way.`,
    options: [
      {
        value: 'a',
        text: 'Incoming Email',
      },
      {
        value: 'b',
        text: 'Outgoing Email',
      },
      {
        value: 'c',
        text: 'CD ROMs',
      },
      {
        value: 'd',
        text: 'Websites',
      },
    ],
  },
  {
    statement:
      'Which of the following is a suitable term for any programmable content of a hardware device configurations and data for application-specific integrated circuits (ASICs), programmable logic devices, etc?',
    answer: 'c',
    explanation: `A firmware refers to a computer programme which is “embedded” in a hardware device and is an essential part of the hardware. It is sometimes also called embedded software. One example is a TV remote set which has a software embedded that can understand and control the TV. TV itself has its own firmware on its motherboard.`,
    options: [
      {
        value: 'a',
        text: 'Hardware',
      },
      {
        value: 'b',
        text: 'Software',
      },
      {
        value: 'c',
        text: 'Firmware',
      },
      {
        value: 'd',
        text: 'Malware',
      },
    ],
  },
  {
    statement:
      'Which among the following is a high-level language used to develop software applications in compact, efficient code that can be run on different types of computers with minimal change?',
    answer: 'c',
    explanation: `COBOL is a high level labguage used to develop software applications in compact. It is compiled English-like computer programming language designed for business use. It object-oriented since 2002.`,
    options: [
      {
        value: 'a',
        text: 'FORTRAN',
      },
      {
        value: 'b',
        text: 'C',
      },
      {
        value: 'c',
        text: 'COBOL',
      },
      {
        value: 'd',
        text: 'ALGOL',
      },
    ],
  },
  {
    statement:
      'What parts did the first Analytical Engine incorporate which made it the first design for a general-purpose computer?',
    answer: 'd',
    explanation: `The Analytical Engine incorporated an Integrated memory, Arithmetic Logic Unit, Control Flow in form of conditional branching and loops which made it the first design for a general purpose computer.`,
    options: [
      {
        value: 'a',
        text: 'Integrated memory',
      },
      {
        value: 'b',
        text: 'Arithmetic Logic Unit',
      },
      {
        value: 'c',
        text: 'Control Flow',
      },
      {
        value: 'd',
        text: 'All of the above',
      },
    ],
  },
  {
    statement: 'Which day is celebrated as World Environment Day?',
    answer: 'b',
    explanation: `5 June is celebrated as the World Environment Day.`,
    options: [
      {
        value: 'a',
        text: '16 May',
      },
      {
        value: 'b',
        text: '5 June',
      },
      {
        value: 'c',
        text: '17 July',
      },
      {
        value: 'd',
        text: '18 December',
      },
    ],
  },
  {
    statement: 'Which day is celebrated as International Literacy Day ?',
    answer: 'a',
    explanation: `8 September is celebrated as the International Literacy Day.`,
    options: [
      {
        value: 'a',
        text: '8 September',
      },
      {
        value: 'b',
        text: '7 July',
      },
      {
        value: 'c',
        text: '19 April',
      },
      {
        value: 'd',
        text: '28 June',
      },
    ],
  },
  {
    statement: 'Which day is celebrated as Human Rights Day?',
    answer: 'a',
    explanation: `10 December is celebrated as the Human Rights Day.`,
    options: [
      {
        value: 'a',
        text: '10 December',
      },
      {
        value: 'b',
        text: '22 September',
      },
      {
        value: 'c',
        text: '21 January',
      },
      {
        value: 'd',
        text: '2 April',
      },
    ],
  },
  {
    statement: 'Which day is celebrated as World AIDS Day?',
    answer: 'a',
    explanation: `1 December is celebrated as World AIDS Day.`,
    options: [
      {
        value: 'a',
        text: '1 December',
      },
      {
        value: 'b',
        text: '10 January',
      },
      {
        value: 'c',
        text: '6 March',
      },
      {
        value: 'd',
        text: '19 April',
      },
    ],
  },
  {
    statement: 'Which day is celebrated as World Tsunami Awareness Day?',
    answer: 'b',
    explanation: `5 November is celebrated as the World Tsunami Awareness Day.`,
    options: [
      {
        value: 'a',
        text: '2 March',
      },
      {
        value: 'b',
        text: '5 November',
      },
      {
        value: 'c',
        text: '10 January',
      },
      {
        value: 'd',
        text: '1 April',
      },
    ],
  },
  {
    statement: 'Which city to host Digital Haryana Summit (SHS)?',
    answer: 'b',
    explanation: `Gurugram city to host Digital Haryana Summit (SHS)?`,
    options: [
      {
        value: 'a',
        text: 'Rohtak',
      },
      {
        value: 'b',
        text: 'Gurugram',
      },
      {
        value: 'c',
        text: 'Panipat',
      },
      {
        value: 'd',
        text: 'Sonipat',
      },
    ],
  },
  {
    statement:
      'Which village panchayat of Haryana has passed a resolution “No Toilet, No Bride”?',
    answer: 'c',
    explanation: `Godikan village panchayat of Haryana has passed a resolution “No Toilet, No Bride”`,
    options: [
      {
        value: 'a',
        text: 'Bishangarh',
      },
      {
        value: 'b',
        text: 'Nimriwali',
      },
      {
        value: 'c',
        text: 'Godikan',
      },
      {
        value: 'd',
        text: 'Ishapur Kheri',
      },
    ],
  },
  {
    statement:
      'In Kho-Kho , the players occupying the squares are known as ________?',
    answer: 'c',
    explanation: `In Kho-Kho , the players occupying the squares are known as Chasers`,
    options: [
      {
        value: 'a',
        text: 'Lobby',
      },
      {
        value: 'b',
        text: 'Raiders',
      },
      {
        value: 'c',
        text: 'Chasers',
      },
      {
        value: 'd',
        text: 'Chukker',
      },
    ],
  },
  {
    statement:
      'When was the Olympic Flame first introduced in the Winter Olympics?',
    answer: 'c',
    explanation: `Olympic Flame first introduced in the Winter Olympics in 1936`,
    options: [
      {
        value: 'a',
        text: '1904',
      },
      {
        value: 'b',
        text: '1924',
      },
      {
        value: 'c',
        text: '1936',
      },
      {
        value: 'd',
        text: '1900',
      },
    ],
  },
];

export default questions;
