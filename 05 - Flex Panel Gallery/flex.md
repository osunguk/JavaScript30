# Flex

[참고 사이트](https://heropy.blog/2018/11/24/css-flexible-box/)

요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법 제공

주요 개념 2가지

- Container
- Items



*참고 자료*

주축 과 교차축

![](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-axis.jpg)



## Container

사용가능한 속성

- display : block | inline-block | none | flex | inline-flex
  flex 은 수직 inline-flex은 수평으로 쌓임
  ![](https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg)
- flex-flow
  - flex-direction : row | row-reverse | column | column-revers
    ![](https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg)
  - flex-wrap : nowrap | wrap | wrap-reverse
    ![](https://heropy.blog/images/screenshot/css-flexible-box/flex-wrap.jpg)
- justify-content : flex-start | flex-end | center | space-between | space-around
  주 축(main-axis) 정렬 방법 설정
  ![](https://heropy.blog/images/screenshot/css-flexible-box/flex-justify-content.jpg)
- align-content : stretch | flex-start | flex-end | center | space-between | space-around
  교차 축(cross-axis)의 정렬 방법 설정
- ![](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-content.jpg)
- align-items : stretch | flex-start | flex-end | center | baseline
  교차 축(cross-axis)에서 Items 의 정렬 방법 설정 (주로 items이 한 줄일 때 많이 사용)

![](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-items.jpg)

## Items

사용가능한 속성

- order : 순서;
  item에 숫자를 지정하고 숫자가 클수록 순서가 밀린다 (음수도 혀용)
- flex : item의 너비(증가, 감소, 기본)를 설정하는 단축 속성
  - flex-grow : (default ) 0
  - flex-shrink : (default ) 1
  - flex-basis : (default ) auto <u><- 값을 지정하지 않는다면 0으로 됨</u>
- align-self : auto | stretch | flex-start | flex-end | center | baseline
  교차 축(cross-axis)에서 개별 Item의 정렬 방법 설정

![](https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg)