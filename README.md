# EXIF 프레임 — 웹 배포용 폴더 (PWA)

`index.html` 하나로 동작하는 앱에 **앱 아이콘·매니페스트**를 붙여, 폰 홈 화면에 **앱처럼(전체화면)** 설치되도록 만든 배포용 폴더입니다.
사진은 브라우저 안에서만 처리되고 서버로 보내지 않습니다.

| 파일 | 역할 |
| --- | --- |
| `index.html` | 앱 본체 (기능은 기존과 동일) |
| `manifest.json` | 앱 이름·시작 주소·전체화면 모드·아이콘 정의 |
| `icon-192.png`, `icon-512.png` | 안드로이드·PC용 앱 아이콘 |
| `icon-512-maskable.png` | 안드로이드 원형/스퀘어클 마스킹용 아이콘 |
| `apple-touch-icon.png` (180×180) | 아이폰 홈 화면 아이콘 |
| `sw.js` | 서비스 워커 (안드로이드 '앱 설치' 조건, 캐시 없이 항상 최신) |

## 올리는 방법 (아무거나 하나)

### 1) Netlify Drop — 가장 빠름, 계정 없이도 가능
1. <https://app.netlify.com/drop> 접속
2. 이 폴더를 통째로(또는 `exif-frame-pwa.zip`) 끌어다 놓기
3. 나오는 주소(`https://xxxx.netlify.app`)를 폰에서 열기 → 홈 화면에 추가

### 2) GitHub Pages
1. GitHub에 새 저장소를 만들고 이 폴더의 파일을 그대로 업로드
2. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**
3. 1~2분 뒤 `https://아이디.github.io/저장소이름/` 열기

### 3) Vercel
1. <https://vercel.com> 로그인 → **Add New → Project → Upload** (또는 GitHub 저장소 연결)
2. 프레임워크는 **Other**, 빌드 명령 없이 그대로 배포
3. 나오는 주소를 폰에서 열기

> `file://`로 열면 앱 설치는 되지 않습니다. 반드시 위처럼 **https 주소**로 열어야 합니다.

## 폰에 앱으로 설치

- **아이폰(사파리)**: 공유 버튼 → **홈 화면에 추가**
- **안드로이드(크롬)**: 오른쪽 위 ⋮ → **앱 설치** (또는 '홈 화면에 추가')

설치하면 주소창 없이 전체화면으로 열리고, 홈 화면 아이콘은 `apple-touch-icon.png` / `icon-*.png`가 쓰입니다.

## 수정 후 다시 올릴 때

`index.html`만 바꿔서 같은 곳에 다시 올리면 됩니다. 서비스 워커가 캐시를 두지 않으므로 폰에서 새로고침하면 바로 최신 화면이 나옵니다. (홈 화면 아이콘·이름을 바꿨다면 앱을 지우고 다시 추가)
