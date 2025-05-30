📚 도서관리서비스

React + Vite + MUI 프론론트엔드와 Spring Boot 백엔드로 구현한 **도서 관리 서비스**  
- CRUD·표지 생성(OpenAI DALL·E)·MUI 컴포넌트·Axios API 통신  

![실행 예시](./example.png)

---

## 🚀 Features
| 페이지 | 경로 | 주요 기능 |
|--------|------|-----------|
| 📗 **BookListPage** | `/books` | 전체 목록 조회, 테이블 정렬/검색 |
| 📘 **BookDetailPage** | `/books/:id` | 상세 정보, notepad 배경 + 표지 미리보기 |
| ✏️ **BookFormPage** | `/books/new` | 도서 등록 (폼 유효성 + Snackbar) |
| 🖼 **BookCoverPage** | `/books/:id/cover` | OpenAI 이미지 생성 → `/assets/covers` 저장 |
| ⚡️ **BookEditPage** | `/books/:id/edit` | 기존 데이터 수정 |

---

## 🏗 Tech Stack
| 영역 | 사용 기술 |
|------|----------|
| Frontend | **React 18**, **Vite**, **MUI v5**, Axios, React Router v6 |
| Backend | **Spring Boot 3**, Spring MVC, Spring Data JPA, H2/PostgreSQL |
| AI | **OpenAI Images API (DALL·E 3)** |
| Infra | Node >= 18, Java 17, (Option) Docker Compose |

---

## 📂 프로젝트 구조 

### FrontEnd

```text
src/
├─ api/
│   └─ bookApi.js
├─ pages/
│   ├─ BookListPage.jsx
│   ├─ BookDetailPage.jsx
│   ├─ BookFormPage.jsx
│   └─ BookCoverPage.jsx
├─ components/
│   ├─ BackButton.jsx
│   └─ BookTable.jsx
├─ assets/  # 정적 파일
│   ├─ notepad-bg.png
│   └─ covers/  # 생성된 표지 저장 폴더
└─ ...