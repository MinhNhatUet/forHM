// timeBasedImages.js
// Time-based image/message data for Solar System Flower

const timeBasedImages = {
    morning: { // 5h-6h: dậy và ăn sáng
        start: 5,
        end: 6,
        name: "Buổi Sáng - Thức Dậy",
        messages: [{
                text: ["Embe ngủ ngon hơm",
                    "Em có mơ đẹp hơmmm"
                ],
                image: ["images/goodmorningebe.jpg",
                    "images/omm/1.jpg",
                    "images/omm/4.jpg",
                ]
            },
            {
                text: ["Em nạp nooo nha",
                    "Bạn nhỏ nhớ ăn sáng nha"
                ],
                image: ["images/eat/ebenapno.jpg",
                    "images/eat/napnonha.jpg",
                    "images/eat/nhonapno.jpg",
                ]
            },
            {
                text: ["Em học vuiii nhaaa",
                    "Cha dooooo",
                    "Bạn nhỏ cố gắng nhaaaa",
                    "Anh cầu nguyện cho bạn nhỏ nàyyyyyy",
                    "    "
                ],
                image: ["images/omm/1.jpg",
                    "images/omm/2.jpg",
                    "images/omm/4.jpg",
                    "images/anui/1.jpg",
                    "images/anui/3.jpg",
                    "images/anui/4.jpg",
                    "images/vuii/1.jpg",
                    "images/vuii/5.jpg",
                    "images/vuii/8.jpg",
                    "images/vuii/10.jpg",
                ]
            },
        ]
    },
    study1: { // 6h-9h30: học
        start: 6,
        end: 9.5,
        name: "Học Buổi Sáng",
        messages: [{
                text: ["     ", ],
                image: ["images/omm/1.jpg",
                    "images/omm/4.jpg",
                ]
            },
            {
                text: ["Em nạp nooo chưaaaaa",
                    "Nay đồ ăn có dở lắm hommmmmm",
                    "   "
                ],
                image: ["images/omm/1.jpg",
                    "images/omm/3.jpg",
                    "images/omm/4.jpg",
                    "images/anui/2.jpg",
                    "images/anui/4.jpg",
                    "images/vuii/1.jpg",
                    "images/vuii/2.jpg",
                    "images/vuii/3.jpg",
                    "images/vuii/6.jpg",
                    "images/vuii/9.jpg",
                ]
            },
            {
                text: ["Em học vuiii nhaaa",
                    "Cha dooooo",
                    "Bạn nhỏ cố gắng nhaaaa",
                    "Anh cầu nguyện cho bạn nhỏ nàyyyyyy",
                    "   "
                ],
                image: ["images/omm/1.jpg",
                    "images/omm/4.jpg",
                    "images/anui/4.jpg",
                    "images/vuii/1.jpg",
                    "images/vuii/4.jpg",
                    "images/vuii/5.jpg",
                ]
            },
        ]
    },
    lunch: { // 9h30-10h30: ăn trưa
        start: 9.5,
        end: 10.5,
        name: "Ăn Trưa",
        messages: [{
                text: ["Embe học vuiii nhaaa", ],
                image: ["images/omm/1.jpg",
                    "images/omm/4.jpg",
                ]
            },
            {
                text: ["Em nạp nooo chưaaaaa",
                    "Nay đồ ăn có dở lắm hommmmmm"
                ],
                image: ["images/omm/1.jpg",
                    "images/omm/3.jpg",
                    "images/omm/4.jpg",
                    "images/anui/2.jpg",
                    "images/anui/4.jpg",
                    "images/vuii/1.jpg",
                    "images/vuii/2.jpg",
                    "images/vuii/3.jpg",
                    "images/vuii/6.jpg",
                    "images/vuii/9.jpg",
                ]
            },
            {
                text: ["Em nạp nooo nha",
                    "Bạn nhỏ nạp nooooo"
                ],
                image: ["images/eat/ebenapno.jpg",
                    "images/eat/napnonha.jpg",
                    "images/eat/nhonapno.jpg",
                ]
            },
            {
                text: ["Em học vuiii nhaaa",
                    "Cha dooooo",
                    "Bạn nhỏ cố gắng nhaaaa",
                    "Anh cầu nguyện cho bạn nhỏ nàyyyyyy"
                ],
                image: ["images/omm/1.jpg",
                    "images/omm/4.jpg",
                    "images/anui/4.jpg",
                    "images/vuii/1.jpg",
                    "images/vuii/4.jpg",
                    "images/vuii/5.jpg",
                ]
            },
        ]
    },
    nap: { // 10h30-13h30: ngủ trưa
        start: 10.5,
        end: 13.5,
        name: "Ngủ Trưa",
        messages: [
            { text: "Chúc em ngủ trưa ngon!", image: "images/sleep/duck.jpg" },
            { text: "Ngủ một giấc lấy sức chiều học tiếp nha!", image: "images/sleep/ebengu.jpg" },
            { text: "Mơ đẹp nhé!", image: "images/sleep/ebengungon.jpg" }
        ]
    },
    study2: { // 13h30-16h: học
        start: 13.5,
        end: 16,
        name: "Học Buổi Chiều",
        messages: [
            { text: "Chiều học tốt nha em!", image: "images/chung/ebecho.jpg" },
            { text: "Cố lên nào!", image: "images/chung/ebefunggianma.jpg" },
            { text: "Em luôn làm tốt!", image: "images/chung/hun.jpg" }
        ]
    },
    dinner: { // 16h-17h30: ăn
        start: 16,
        end: 17.5,
        name: "Ăn Tối",
        messages: [
            { text: "Ăn tối ngon miệng nha!", image: "images/eat/ebenapno.jpg" },
            { text: "Ăn xong nghỉ ngơi nha!", image: "images/eat/napnonha.jpg" },
            { text: "Ăn cùng gia đình vui vẻ!", image: "images/eat/nhonapno.jpg" }
        ]
    },
    together: { // 17h30-21h: chung
        start: 17.5,
        end: 21,
        name: "Thời Gian Chung",
        messages: [
            { text: "Cùng nhau trò chuyện nhé!", image: "images/chung/hunebe.jpg" },
            { text: "Chia sẻ niềm vui hôm nay!", image: "images/chung/hunebee.jpg" },
            { text: "Yêu thương nhiều hơn!", image: "images/chung/hunebene.jpg" },
            { text: "Cùng nhau cố gắng!", image: "images/chung/hungioebe.jpg" }
        ]
    },
    sleep: { // 21h-4h: ngủ (qua đêm)
        start: 21,
        end: 28, // 28 = 4h ngày hôm sau
        name: "Ngủ Đêm",
        messages: [
            { text: "ebe ngủ ngoan nhaaaa", image: "images/sleep/duck.jpg" },
            { text: "wishing you have a nice and lovely dreammm tonight", image: "images/sleep/ebengu.jpg" },
            { text: "hope u have a beautifull dreammmm", image: "images/sleep/ebengungon.jpg" },
            { text: "sleep tightttt", image: "images/sleep/duck.jpg" },
            { text: "bạn nhỏ ngủ ngonnn", image: "images/sleep/ebengu.jpg" }
        ]
    }
};