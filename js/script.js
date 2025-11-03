// ====================== 보험금 현황 데이터 ======================
const insuranceData = [
    {
        id: 1,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ규',
        amount: '500,000원 예상',
        type: '수술비',
        description: '질병 수술비 + 1종 수술비',
    },
    {
        id: 2,
        status: '입금완료',
        statusClass: 'completed',
        name: '성ㅇ연',
        amount: '250,000원',
        type: '응급실비',
        description: '응급실 내원비',
    },
    {
        id: 3,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ인',
        amount: '10,000,000원',
        type: '진단비',
        description: '뇌출혈 진단비',
    },
    {
        id: 4,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ주',
        amount: '780,000원 예상',
        type: '입원/실손',
        description: '입원급여금',
    },
    {
        id: 5,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ희',
        amount: '800,000원',
        type: '수술비',
        description: '종양 적출/절제 수술비',
    },
    {
        id: 6,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ지',
        amount: '2,000,000원 예상',
        type: '수술비',
        description: '수술비',
    },
    {
        id: 7,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ인',
        amount: '2,000,000원',
        type: '진단비',
        description: '만성 신장병',
    },
    {
        id: 8,
        status: '입금완료',
        statusClass: 'completed',
        name: '성ㅇ연',
        amount: '2,000,000원',
        type: '기타',
        description: '치주염 관련 발치술',
    },
    {
        id: 9,
        status: '입금완료',
        statusClass: 'completed',
        name: '신ㅇ주',
        amount: '8,000,000원',
        type: '진단비',
        description: '소액암',
    },
    {
        id: 10,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ자',
        amount: '2,000,000원',
        type: '진단비',
        description: '갑상선암 진단비',
    },
    {
        id: 11,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ겸',
        amount: '300,000원',
        type: '진단비',
        description: '골절 진단비, <br>용종제거 수술비',
    },
    {
        id: 12,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ숙',
        amount: '10,000,000원 예상',
        type: '진단비',
        description: '뇌졸중, <br>뇌혈관 질환 진단비',
    },
    {
        id: 13,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ희',
        amount: '400,000원',
        type: '수술비',
        description: '안검하수 <br>양안수술 수술비',
    },
    {
        id: 14,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ준',
        amount: '500,000원 예상',
        type: '수술비',
        description: '난원공개존중폐쇄술 <br>수술비',
    },
    {
        id: 15,
        status: '접수 중',
        statusClass: 'pending',
        name: '박ㅇ자',
        amount: '500,000원 예상',
        type: '수술비',
        description: '자동차부상 치료비',
    },
    {
        id: 16,
        status: '입금완료',
        statusClass: 'completed',
        name: '정ㅇ호',
        amount: '1,000,000원',
        type: '진단비',
        description: '대상포진 진단비',
    },
    {
        id: 17,
        status: '접수 중',
        statusClass: 'pending',
        name: '백ㅇ우',
        amount: '1,165,882원 예상',
        type: '입원/실손',
        description: '실손의료비 + 입원일당',
    },
    {
        id: 18,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ기',
        amount: '1,000,000원',
        type: '기타',
        description: '협심증',
    },
    {
        id: 19,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ수',
        amount: '600,000원',
        type: '수술비',
        description: '운전자보험 <br>부상 치료비',
    },
    {
        id: 20,
        status: '입금완료',
        statusClass: 'completed',
        name: '강ㅇ미',
        amount: '1,000,000원',
        type: '진단비',
        description: '대상포진 진단비',
    },
    {
        id: 21,
        status: '입금완료',
        statusClass: 'completed',
        name: '백ㅇ우',
        amount: '400,000원',
        type: '교통사고',
        description: '교통사고 처리 비용 + <br>대인사고 할증 지원금',
    },
    {
        id: 22,
        status: '입금완료',
        statusClass: 'completed',
        name: '류ㅇ지',
        amount: '2,300,000원',
        type: '진단비',
        description: '골절진단비+상해수술비',
    },
    {
        id: 23,
        status: '접수 중',
        statusClass: 'pending',
        name: '문ㅇ식',
        amount: '400,000원 예상',
        type: '기타',
        description: '치아 파절',
    },
    {
        id: 24,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ기',
        amount: '1,040,000원',
        type: '진단비',
        description: '골절진단비',
    },
    {
        id: 25,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ희',
        amount: '2,500,000원',
        type: '수술비',
        description: '방사선조사 <br>질병수술급여금',
    },
    {
        id: 26,
        status: '접수 중',
        statusClass: 'pending',
        name: '최ㅇ선',
        amount: '600,000원 예상',
        type: '수술비',
        description: '망막 열공 레이저 치료',
    },
    {
        id: 27,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ예',
        amount: '900,000원',
        type: '교통사고',
        description: '교통사고 할증지원금',
    },
    {
        id: 28,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ식',
        amount: '13,000,000원 예상',
        type: '진단비',
        description: '허혈성 심장질환 진단비',
    },
    {
        id: 29,
        status: '입금완료',
        statusClass: 'completed',
        name: '하ㅇ자',
        amount: '500,000원',
        type: '수술비',
        description: '질병 수술비 + 1종 수술비',
    },
    {
        id: 30,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ인',
        amount: '250,000원',
        type: '응급실비',
        description: '응급실 내원비',
    },
    {
        id: 31,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ인',
        amount: '10,000,000원',
        type: '진단비',
        description: '뇌출혈 진단비',
    },
    {
        id: 32,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ주',
        amount: '780,000원',
        type: '입원/실손',
        description: '입원급여금',
    },
    {
        id: 33,
        status: '입금완료',
        statusClass: 'completed',
        name: '박ㅇ희',
        amount: '800,000원',
        type: '수술비',
        description: '종양 적출/절제 수술비',
    },
    {
        id: 34,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ양',
        amount: '2,500,000원 예상',
        type: '수술비',
        description: '방사선조사 <br>질병수술급여금',
    },
    {
        id: 35,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ식',
        amount: '2,000,000원',
        type: '수술비',
        description: '수술비',
    },
    {
        id: 36,
        status: '접수 중',
        statusClass: 'pending',
        name: '박ㅇ환',
        amount: '2,000,000원 예상',
        type: '진단비',
        description: '만성 신장병',
    },
    {
        id: 37,
        status: '접수 중',
        statusClass: 'pending',
        name: '김ㅇ수',
        amount: '2,000,000원 예상',
        type: '기타',
        description: '치주염 관련 발치술',
    },
    {
        id: 38,
        status: '입금완료',
        statusClass: 'completed',
        name: '최ㅇ섭',
        amount: '10,000,000원',
        type: '진단비',
        description: '뇌졸중, <br>뇌혈관 질환 진단비',
    },
    {
        id: 39,
        status: '접수 중',
        statusClass: 'pending',
        name: '권ㅇ주',
        amount: '500,000원 예상',
        type: '수술비',
        description: '난원공개존중폐쇄술 <br>수술비',
    },
    {
        id: 40,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ기',
        amount: '500,000원',
        type: '수술비',
        description: '자동차부상 치료비',
    },
    {
        id: 41,
        status: '입금완료',
        statusClass: 'completed',
        name: '이ㅇ희',
        amount: '1,000,000원',
        type: '진단비',
        description: '대상포진 진단비',
    },
    {
        id: 42,
        status: '입금완료',
        statusClass: 'completed',
        name: '장ㅇ이',
        amount: '4,000,000원',
        type: '수술비',
        description: '인공관절 수술비 + <br>질병후유장해',
    },
    {
        id: 43,
        status: '입금완료',
        statusClass: 'completed',
        name: '강ㅇ희',
        amount: '200,000원',
        type: '수술비',
        description: '외요도구 폴립 절제술',
    },
    {
        id: 44,
        status: '입금완료',
        statusClass: 'completed',
        name: '최ㅇ선',
        amount: '600,000원',
        type: '수술비',
        description: '망막 열공 레이저 치료',
    },
    {
        id: 45,
        status: '접수 중',
        statusClass: 'pending',
        name: '인ㅇ준',
        amount: '260,000원 예상',
        type: '응급실비',
        description: '발목 염좌 응급실 내원, <br>실손보험',
    },
    {
        id: 46,
        status: '입금완료',
        statusClass: 'completed',
        name: '문ㅇ리',
        amount: '400,000원',
        type: '기타',
        description: '치아 파절',
    },
    {
        id: 47,
        status: '입금완료',
        statusClass: 'completed',
        name: '배ㅇ숙',
        amount: '400,000원',
        type: '수술비',
        description: '피부 양성 생성물 수술비',
    },
    {
        id: 48,
        status: '입금완료',
        statusClass: 'completed',
        name: '김ㅇ진',
        amount: '200,000원',
        type: '수술비',
        description: '치핵수술비',
    },
    {
        id: 49,
        status: '접수 중',
        statusClass: 'pending',
        name: '조ㅇ남',
        amount: '400,000원 예상',
        type: '교통사고',
        description: '교통사고 처리 비용 + <br>대인사고 할증 지원금',
    },
    {
        id: 50,
        status: '입금완료',
        statusClass: 'completed',
        name: '배ㅇ영',
        amount: '10,000,000원',
        type: '진단비',
        description: '뇌출혈 진단비',
    },
];

// ====================== 현황 리스트 업데이트 ======================
let currentIndex = 0;
let badgeToggle = true;
const displayCount = 5;

// initStatusList 함수
function initStatusList() {
    const statusContainer = document.querySelector('.situation .status');
    if (!statusContainer) return;

    const initialData = [];
    for (let i = 0; i < displayCount; i++) {
        initialData.push(insuranceData[i]);
    }

    const html = initialData
        .map((item, index) => {
            // 순서대로 번갈아가면서 badge 색상 선택
            const badge = index % 2 === 0 ? 'badge1' : 'badge2';

            return `
                <li class="item">
                    <div class="s_left">
                        <span class="badge ${badge} ${item.statusClass}">${item.status}</span>
                        <span class="type">${item.type}</span>
                        <span class="name">${item.name}</span>
                        <span class="description">${item.description}</span>
                    </div>
                    <div class="amount">${item.amount}</div>
                </li>
            `;
        })
        .join('');

    statusContainer.innerHTML = html;
    currentIndex = displayCount;
    badgeToggle = displayCount % 2 === 0; // 다음에 사용할 badge 상태 설정
}

// 업데이트 함수 (하나씩 슬라이드)
function updateStatusList() {
    const statusContainer = document.querySelector('.situation .status');
    if (!statusContainer) return;

    const newItem = insuranceData[currentIndex];

    // 번갈아가면서 badge 색상 선택
    const badge = badgeToggle ? 'badge1' : 'badge2';
    badgeToggle = !badgeToggle;

    const newItemHTML = `
        <li class="item slide-in">
            <div class="s_left">
                <span class="badge ${badge} ${newItem.statusClass}">${newItem.status}</span>
                <span class="type">${newItem.type}</span>
                <span class="name">${newItem.name}</span>
                <span class="description">${newItem.description}</span>
            </div>
            <div class="amount">${newItem.amount}</div>
        </li>
    `;

    // 마지막 항목 바로 제거 (애니메이션 없이)
    const items = statusContainer.querySelectorAll('.item');
    if (items.length >= displayCount) {
        items[items.length - 1].remove();
    }

    // 맨 위에 새 항목 추가
    statusContainer.insertAdjacentHTML('afterbegin', newItemHTML);

    // 새 항목 슬라이드 인 애니메이션
    const newItemElement = statusContainer.querySelector('.slide-in');
    newItemElement.style.transform = 'translateY(-60%)';
    newItemElement.style.opacity = '0';

    setTimeout(() => {
        newItemElement.style.transform = 'translateY(0)';
        newItemElement.style.opacity = '1';
        newItemElement.classList.remove('slide-in');
    }, 50);

    currentIndex = (currentIndex + 1) % insuranceData.length;
}

// ====================== DOMContentLoaded ======================
document.addEventListener('DOMContentLoaded', function () {
    // 초기 리스트 렌더링
    initStatusList();

    // 3초마다 리스트 업데이트
    setInterval(updateStatusList, 2000);

    // ====================== 폰 번호 자동 포맷팅 ======================
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/[^\d]/g, '');
            let formattedValue = '';

            if (value.length >= 3) {
                formattedValue += value.substring(0, 3) + '-';
                if (value.length >= 7) {
                    formattedValue += value.substring(3, 7) + '-';
                    if (value.length >= 11) {
                        formattedValue += value.substring(7, 11);
                    } else {
                        formattedValue += value.substring(7);
                    }
                } else {
                    formattedValue += value.substring(3);
                }
            } else {
                formattedValue = value;
            }

            e.target.value = formattedValue;
        });
    }

    // ====================== 지역 선택 ======================
    const districtOptions = {
        seoul: ['강남구', '서초구', '송파구', '마포구', '영등포구', '중구', '종로구', '성동구'],
        busan: ['해운대구', '부산진구', '동래구', '남구', '중구', '서구'],
        daegu: ['중구', '동구', '서구', '남구', '북구', '수성구'],
        incheon: ['중구', '동구', '미추홀구', '연수구', '남동구'],
        gwangju: ['동구', '서구', '남구', '북구', '광산구'],
        daejeon: ['중구', '동구', '서구', '유성구', '대덕구'],
        ulsan: ['중구', '남구', '동구', '북구', '울주군'],
        sejong: ['세종특별자치시'],
        gyeonggi: ['수원시', '성남시', '고양시', '용인시', '부천시', '안산시', '안양시', '남양주시'],
        gangwon: ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시'],
        chungbuk: ['청주시', '충주시', '제천시', '보은군', '옥천군'],
        chungnam: ['천안시', '공주시', '보령시', '아산시', '서산시'],
        jeonbuk: ['전주시', '군산시', '익산시', '정읍시', '남원시'],
        jeonnam: ['목포시', '여수시', '순천시', '나주시', '광양시'],
        gyeongbuk: ['포항시', '경주시', '김천시', '안동시', '구미시'],
        gyeongnam: ['창원시', '진주시', '통영시', '사천시', '김해시'],
        jeju: ['제주시', '서귀포시'],
    };

    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');

    if (provinceSelect && districtSelect) {
        provinceSelect.addEventListener('change', function (e) {
            const selectedProvince = e.target.value;

            // 색상 변경
            if (selectedProvince !== '') {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }

            // 시/군/구 옵션 업데이트
            districtSelect.innerHTML = '<option value="">시/군/구</option>';
            districtSelect.classList.remove('selected');

            if (districtOptions[selectedProvince]) {
                districtOptions[selectedProvince].forEach((district) => {
                    const option = document.createElement('option');
                    option.value = district;
                    option.textContent = district;
                    districtSelect.appendChild(option);
                });
            }
        });

        districtSelect.addEventListener('change', function () {
            if (this.value !== '') {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }

    // ====================== 모달 기능 ======================
    const modals = document.querySelectorAll('.modal');
    const viewButtons = document.querySelectorAll('.view_btn');
    const modalCloseButtons = document.querySelectorAll('.modal_button button');

    // '보기' 버튼 클릭 시 모달 열기 - data-modal 속성 사용
    viewButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');

            // data-modal 값에 따라 해당 모달 열기
            if (modalType === 'modal1') {
                modals[0].classList.add('active'); // 첫 번째 모달 (고유식별정보)
            } else if (modalType === 'modal2') {
                modals[1].classList.add('active'); // 두 번째 모달 (민감정보)
            } else if (modalType === 'modal3') {
                modals[2].classList.add('active'); // 세 번째 모달 (개인정보)
            }

            document.body.style.overflow = 'hidden';
        });
    });

    // 모달 닫기 버튼
    modalCloseButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (modals[index]) {
                modals[index].classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // 모달 배경 클릭 시 닫기
    modals.forEach((modal) => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ====================== 체크박스 기능 ======================
    const agree1 = document.getElementById('agree1');
    const agree2 = document.getElementById('agree2');
    const agree3 = document.getElementById('agree3');
    const agreeAll = document.getElementById('agreeAll');

    // 전체 동의 체크박스
    if (agreeAll) {
        agreeAll.addEventListener('change', function () {
            const isChecked = this.checked;
            if (agree1) agree1.checked = isChecked;
            if (agree2) agree2.checked = isChecked;
            if (agree3) agree3.checked = isChecked;
        });
    }

    // 개별 체크박스 - 모두 체크되면 전체 동의도 체크
    [agree1, agree2, agree3].forEach((checkbox) => {
        if (checkbox) {
            checkbox.addEventListener('change', function () {
                if (agree1 && agree2 && agree3 && agreeAll) {
                    if (agree1.checked && agree2.checked && agree3.checked) {
                        agreeAll.checked = true;
                    } else {
                        agreeAll.checked = false;
                    }
                }
            });
        }
    });

    // ====================== 폼 제출 ======================
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // 체크박스 검증
            if (agree1 && agree2 && agree3) {
                if (!agree1.checked || !agree2.checked || !agree3.checked) {
                    alert('모든 약관에 동의해주세요.');
                    return;
                }
            }

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            if (!data.name || !data.phone || !data.province || !data.district) {
                alert('모든 필드를 입력해주세요.');
                return;
            }

            const phonePattern = /^010-\d{4}-\d{4}$/;
            if (!phonePattern.test(data.phone)) {
                alert('올바른 전화번호 형식으로 입력해주세요.');
                return;
            }

            console.log('신청 데이터:', data);
            alert('신청이 완료되었습니다! 곧 연락드리겠습니다.');

            // 폼 리셋
            this.reset();
            if (districtSelect) {
                districtSelect.innerHTML = '<option value="">시/군/구</option>';
            }
            if (provinceSelect) provinceSelect.classList.remove('selected');
            if (districtSelect) districtSelect.classList.remove('selected');
        });
    }
});
