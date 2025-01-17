---
sidebar_position: 1
---

# 프로젝트 셋업하기

<br/>

### ※ AI Human SDK (Web) 시스템 요구사항

|                    | 요구 사항                        |
|--------------------|----------------------------------|
| 네트워크 환경     | 100Mbps 이상                     |
| PC                 | CPU i5 7세대 이상 또는 그에 준하는 성능<br/>RAM 4GB 이상       |
| Android           | CPU S660 이상 또는 그에 준하는 성능<br/>RAM 4GB 이상<br/>(갤럭시 FE 혹은 A 시리즈의 경우 원활하지 않음) |
| iOS                | iPhone 6S 이상                   |
| 브라우저          | Chrome 109 이상<br/>Safari 16 이상 |

<br/>

### 1. SDK 추가하기

아래와 같이 Javascript SDK를 웹페이지에 추가하십시오.

```html
<script src="https://cdn-aihuman.deepbrainai.io/sdk/web/aiPlayer-1.5.2.min.js"></script>
```

<br/>

### 2. AIPlayer 객체를 포함할 영역을 지정

아래와 같이 AIPlayer 객체를 포함할 HTML Element 영역을 지정합니다. 영역의 크기나 위치를 조정하여 AIPlayer가 그려질 영역을 자유롭게 조정할 수 있습니다.

```html
<div id="AIPlayerWrapper"></div>
```

<br/>

### 3. AIPlayer 객체를 생성

AIPlayer 생성자에 대한 인수로 위에서 지정한 AIPlayer의 영역(wrapper)을 입력하여 AIPlayer 객체를 만듭니다.

```javascript
const wrapper = document.getElementById("AIPlayerWrapper");
const AI_PLAYER = new AIPlayer(wrapper);
```

<br/>

