const headerTitle = document.getElementById('unit-title-header');

// Mũi tên toggle và danh sách bài kiểm tra
document.querySelectorAll('.unit-title').forEach(unitTitle => {
    unitTitle.addEventListener('click', () => {
        const unitId = unitTitle.getAttribute('data-unit');
        const testList = document.getElementById(`unit-${unitId}-tests`);
        const arrow = unitTitle.querySelector('.arrow');

        // Ẩn tất cả các danh sách bài kiểm tra khác
        document.querySelectorAll('.list-group').forEach(list => {
            if (list !== testList) list.classList.add('d-none');
        });
        document.querySelectorAll('.arrow').forEach(otherArrow => {
            if (otherArrow !== arrow) otherArrow.classList.replace('bi-chevron-up', 'bi-chevron-down');
        });

        // Đóng/mở danh sách bài kiểm tra
        testList.classList.toggle('d-none');

        // Cập nhật mũi tên
        if (testList.classList.contains('d-none')) {
            arrow.classList.replace('bi-chevron-up', 'bi-chevron-down');
        } else {
            arrow.classList.replace('bi-chevron-down', 'bi-chevron-up');
        }

        // Cập nhật tiêu đề Unit trong header
        headerTitle.textContent = ` Unit ${unitId}`;
    });
});
// Định nghĩa dữ liệu các bài kiểm tra với câu hỏi chọn đáp án
const testData = {
    '1-1': {
        title: 'Test 1-1',
        questions: [
            {
                question : 'It was the longest film I’ve ever seen; it ______ four hours.',
                options: ['ended', 'finished', 'lasted', 'stayed'],
                correctAnswer: 'lasted'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            },
            {
                question : 'She tried to ______ out of the window to see the procession more clearly.',
                options: ['bend', 'curve', 'bow', 'lean'],
                correctAnswer: 'lean'
            },
            {
                question : 'She came to England for a year in order to ______ the language..',
                options: [' know', ' become', 'refresh', 'learn'],
                correctAnswer: 'learn'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Peter begged his neighbour to ______ him five pounds until the weekend.',
                options: ['lend', 'supply', 'provide', 'hivre'],
                correctAnswer: 'lend'
            }
        ]
    },
    '1-2': {
        title: 'Bài kiểm tra 1-2',
        questions: [
            {
                question: 'He offered to ______ her a hand as the suitcase was too heavy for her to carry.',
                options: ['lend', 'show', 'loan', 'borrow'],
                correctAnswer: 'lend'
            },
            {
                question : 'Peter begged his neighbour to ______ him five pounds until the weekend.',
                options: ['lend', 'supply', 'provide', 'hivre'],
                correctAnswer: 'lend'
            },
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            }
        ]
    },
    '2-1': {
        title: 'Test 2-1',
        questions: [
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            }
        ]
    },
    '2-2': {
        title: 'Test 2-2',
        questions: [
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            }
        ]
    },
    '3-1': {
        title: 'Test 3-1',
        questions: [
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'After driving for five hours, the driver pulled into ______ for a rest.',
                options: ['a bypass', 'flyover', 'a lay-by', 'a roundabout'],
                correctAnswer: 'a lay-by'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            }
        ]
    },
    '3-2': {
        title: 'Test 3-2',
        questions: [
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            }
        ]
    },
    '4-1': {
        title: 'Test 4-1',
        questions: [
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            }
        ]
    },
    '4-2': {
        title: 'Test 4-2',
        questions: [
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            }
        ]
    },
    '5-1': {
        title: 'Test 5-1',
        questions: [
            {
                question : 'If the boy had ______ the dog alone it wouldn’t have bitten him.',
                options: ['set', 'left', 'put', 'had'],
                correctAnswer: 'left'
            },
            {
                question : 'Are you going to attend Dr Barker’s ______ on “Brain Electronics” tomorrow?',
                options: ['conference', 'lecture', 'meeting', 'discussion'],
                correctAnswer: 'lecture'
            },
            {
                question : 'I’m sorry but what he thinks is not of the _____ importance to me.',
                options: [' merest', 'lowest', 'worst', 'least'],
                correctAnswer: 'least'
            },
            {
                question : 'It is time to ______ the table for dinner.',
                options: ['place', 'lay', 'lay out', 'put out'],
                correctAnswer: 'lay'
            },
            {
                question : 'The guide is ______ a line of tourists through the uarrow passage with the help of his torch.',
                options: ['conducting', 'bringing', 'leading', ' guiding'],
                correctAnswer: 'leading'
            }
        ]
    }
};
// Lưu kết quả vào localStorage với key 'testResult'
localStorage.setItem('testData', JSON.stringify(testData));

// Hiển thị nội dung bài kiểm tra khi click vào Test
document.querySelectorAll('.test-link').forEach(testLink => {
    testLink.addEventListener('click', () => {
        const testId = testLink.getAttribute('data-test'); // Lấy ID bài kiểm tra
        const testTitle = testLink.textContent; // Lấy tên bài kiểm tra

        // Thay đổi tiêu đề bài kiểm tra
        document.getElementById('test-title').textContent = `Test: ${testTitle}`;
        const testContent = document.getElementById('test-content');
        const submitBtn = document.getElementById('submit-btn-container');

        // Kiểm tra xem testId có tồn tại trong testData không
        if (testData[testId]) {
            const test = testData[testId];
            // Tạo nội dung câu hỏi chọn đáp án
            let questionHtml = '';
            test.questions.forEach((q, index) => {
                questionHtml += `
                    <div class="mb-3">
                        <label class="form-label">Question ${index + 1}: ${q.question}</label>
                        <div>
                            ${q.options.map((option, i) => `
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question-${index}" id="question-${index}-option-${i}" value="${option}">
                                    <label class="form-check-label" for="question-${index}-option-${i}">
                                        ${option}
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            });
            testContent.innerHTML = questionHtml;
        } else {
            testContent.innerHTML = `<p>Test content does not exist.</p>`;
        }

        // Hiển thị nút Nộp bài
        submitBtn.classList.remove('d-none');
    });
});

// Đổi class active khi click vào test link
document.querySelectorAll('.test-link').forEach((testLink) => {
    testLink.addEventListener('click', () => {
        // Xóa active class khỏi các test-link khác
        document.querySelectorAll('.test-link').forEach(link => link.classList.remove('active'));

        // Thêm class active cho test được chọn
        testLink.classList.add('active');
    });
});
// Khi nhấn nút "Nộp bài", sẽ tính điểm và chuyển hướng đến trang kết quả
document.getElementById('submit-btn').addEventListener('click', () => {
    const testId = '1-1'; // Chọn ID bài kiểm tra (có thể thay đổi tùy vào bài kiểm tra người dùng chọn)
    const test = testData[testId];
    
    let score = 0;
    let answers = [];

    // Duyệt qua các câu hỏi và tính điểm
    test.questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
        const userAnswer = selectedAnswer ? selectedAnswer.value : 'Not selected yet';
        const isCorrect = userAnswer === q.correctAnswer;

        if (isCorrect) {
            score++;
        }

        answers.push({
            question: q.question,
            userAnswer,
            correctAnswer: q.correctAnswer,
            result: isCorrect ? '✅' : '❌',
        });
    });

    // Lưu trữ kết quả vào LocalStorage để truy cập từ trang kết quả
    localStorage.setItem('testResult', JSON.stringify({ score, answers, testTitle: test.title }));

    // Chuyển hướng đến trang kết quả
    window.location.href = 'point.html';
});
 // Khi trang được tải, lấy tên người dùng từ localStorage
 window.onload = function() {
    var username = localStorage.getItem("username");

    // Nếu có tên người dùng trong localStorage, hiển thị tên đó
    if (username) {
      document.getElementById("user-name").textContent = username;
    } else {
      // Nếu không có tên người dùng (ví dụ: người dùng chưa đăng nhập), chuyển hướng về trang đăng nhập
      window.location.href = "login.html";
    }
  };

  // Thêm sự kiện cho "Đăng Xuất" để xóa tên người dùng khỏi localStorage khi người dùng đăng xuất
  document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("username"); // Xóa tên người dùng khỏi localStorage
    window.location.href = "login.html"; // Quay lại trang đăng nhập
  });