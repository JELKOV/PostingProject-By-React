# PostingProject-By-React

**PostingProject-By-React**는 React와 React Router를 사용해 프론트엔드 기능을 구현한 프로젝트입니다.  
포스트 목록, 포스트 상세보기, 포스트 작성 등을 포함한 **게시판 기능**을 제공합니다.

---

## 📋 프로젝트 주요 기능

1. **포스트 목록 표시**
   - 백엔드 서버에서 데이터를 불러와 포스트 목록을 표시합니다.
   - React Router의 **`loader`**를 사용하여 데이터를 비동기적으로 가져옵니다.

2. **포스트 상세 보기**
   - 특정 포스트를 클릭하면 상세 페이지가 나타납니다.
   - React Router의 **동적 라우트**와 **`useLoaderData`** 훅을 활용해 해당 `postId` 데이터를 가져옵니다.

3. **새 포스트 작성**
   - 새 포스트를 작성하고 백엔드 서버로 데이터를 전송합니다.
   - React Router의 **`Form`** 컴포넌트와 **`action`** 함수를 활용해 **POST 요청**을 보냅니다.

4. **라우팅 및 네비게이션**
   - React Router의 **라우트 중첩**과 `Modal` 컴포넌트를 활용해 페이지 전환 없이 모달 형태로 포스트 작성 및 상세보기를 구현했습니다.

---

## 📁 프로젝트 구조

```plaintext
postingproject-by-react/
├── public/               # Static assets
│   ├── index.html        # Root HTML 파일
│
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트
│   │   ├── Modal.jsx
│   │   ├── Post.jsx
│   │   ├── PostList.jsx
│
│   ├── routes/           # 페이지 및 라우트 관련 컴포넌트
│   │   ├── Posts.jsx         # 포스트 목록 페이지
│   │   ├── PostDetails.jsx   # 포스트 상세 페이지
│   │   ├── NewPost.jsx       # 새 포스트 작성 페이지
│   │   ├── RootLayout.jsx    # 전체 레이아웃
│
│   ├── App.jsx           # 메인 컴포넌트
│   ├── main.jsx          # 진입점 (React Router 설정)
│   └── index.css         # 전역 CSS 스타일
│
├── package.json          # 프로젝트 메타 정보 및 의존성
└── vite.config.js        # Vite 설정 파일
```
## 🚀 기술 스택

- **프론트엔드**: React, React Router v6  
- **스타일링**: CSS 모듈  
- **번들링**: Vite  
- **상태 관리**: React 훅 (`useState`, `useLoaderData`)  
- **라우팅**: React Router (Loader, Action, Form 활용)  

---

## 🔧 프로젝트 실행 방법

### 레포지토리 클론
```bash
git clone https://github.com/JELKOV/PostingProject-By-React.git
cd PostingProject-By-React
```
## 🔑 핵심 코드 예시

### 포스트 데이터 로딩 (React Router Loader 사용)
```javascript
export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post; // 동적 라우트에 맞는 데이터 반환
}
```
### 새 포스트 작성 (React Router Action 사용)
```javascript
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // Form 데이터 객체로 변환

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });

  return redirect('/'); // 작성 완료 후 메인 페이지로 리디렉션
}
```
### 💻 백엔드 서버 설정

```bash
cd dummy-backend
npm install
npm start
```
