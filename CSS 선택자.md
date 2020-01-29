## CSS 선택자 정리

[참고하기](http://www.nextree.co.kr/p8468/)

1. 전체 선택자

   ```css
   * { margin: 0, padding: 50px;}
   ```

   HTML 페이지 내부의 모든 요소(태그)에 같은 CSS 속성을 적용

   보통 margin 이나 padding 값을 초기화 하는 등 기본 값을 정할 때 사용한다

   문서 안의 모든 요소를 읽기 때문에 남용할 경우 속도 저하가 발생할 수 있다

2. 태그 선택자

   ```css
   p { background: yellowgreen; color: darkgreen; }
   
   ```

3. 클래스 선택자

   ```css
    .class1 { background: yellowgreen; color: darkgreen; }
   div.class2 { background: darkgreen; color: yellowgreen; }
   ```

   위와 같이 <code>.</code>로 해당 클래스를 선택

   마침표 앞에 태그를 붙여주면 범위를 그 특정 태그에 한정해서 꾸민다

4. ID 선택자

   ```css
   #id1 { background: yellowgreen; color: darkgreen; }
   div#id2 { background: darkgreen; color: yellowgreen; }
   ```

   클래스 선택자와 비슷하게 <code>#</code> 를 통해서 해당 id 를 가지는 html 꾸민다

5. 복합 선택자

   ```css
   /* 하위 선택자 */
   section ul { border: 1px dotted black; }
   
   /* 자식 선택자 */
   section>ul { border: 1px dotted black; }  
   ```

   <img src="http://www.nextree.co.kr/content/images/2016/09/yrkim-140331-selector-06.png" alt="img" style="zoom:50%;" /><img src="http://www.nextree.co.kr/content/images/2016/09/yrkim-140331-selector-06-2.png" alt="img" style="zoom:50%;" />

   왼쪽이 하위 선택자 오른쪽이 자식 선택자

   ```css
   /* 인접 형제 선택자 */
   h1+ul { background: yellowgreen; color: darkgreen; }
   
   /* 일반 형제 선택자 */
   h1~ul { background: darkgreen; color: yellowgreen; }  
   ```

   <img src="http://www.nextree.co.kr/content/images/2016/09/yrkim-140331-selector-07.png" alt="img" style="zoom:80%;" />

   인접 형제 선택자 (첫번째 동생 요소만 스타일 적용)![img](http://www.nextree.co.kr/content/images/2016/09/yrkim-140331-selector-08.png)

   일반 형제 선택자 (모든 동생 요소 적용)
   두 선택자 모두 형 요소에는 적용되지 않는다

6. 속성 선택자

   ```css
   /* E[attr]형식 */
   a[href] { background: yellowgreen; color: black; }
   
   /* E[attr="val"]형식 */
   input[type="text"] { width: 150px; border: 1px solid #000; }
   
   /* E[attr$="val"]형식 */
   a[href$=".xls"] { background: darkgreen; }
   
   <!-- HTML -->  
   <a href="one.html">E[attr]형식</a>  
   <input type="text" name="name">  
   <a href="one.xls">E[attr$="val"]형식</a>  
   ```

   | 패턴            | 의미                                                         | CSS Level | 지원하지 않는 브라우저 |
   | --------------- | ------------------------------------------------------------ | --------- | ---------------------- |
   | E[attr]         | 'attr' 속성이 포함된 요소 E를 선택합니다.                    | 2         | IE6                    |
   | E[attr="val"]   | 'attr' 속성의 값이 정확하게 'val'과 일치하는 요소 E를 선택합니다. | 2         | IE6                    |
   | E[attr~="val"]  | 'attr' 속성의 값에 'val'이 포함되는 요소를 선택합니다. (공백으로 분리된 값이 일치해야 합니다.) | 2         | IE6                    |
   | E[attr^="val"]  | 'attr' 속성의 값이 'val'으로 시작하는 요소를 선택합니다.     | 3         | IE6                    |
   | E[attr$="val"]  | 'attr' 속성의 값이 'val'으로 끝나는 요소를 선택합니다.       | 3         | IE6                    |
   | E[attr*="val"]  | 'attr' 속성의 값에 'val'이 포함되는 요소를 선택합니다.       | 3         | IE6                    |
   | E[attr\|="val"] | 'attr' 속성의 값이 정확하게 'val' 이거나 'val-' 으로 시작되는 요소 E를 선택합니다. | 2         | IE6                    |

7. 가상 클래스 선택자

   | 패턴       | 의미                                                         | CSS Level | 지원하지 않는 브라우저 |
   | ---------- | ------------------------------------------------------------ | --------- | ---------------------- |
   | E::link    | 방문하지 않은 링크 E를 선택합니다.                           | 1         | -                      |
   | E::visited | 방문한 링크 E를 선택합니다.                                  | 1         | -                      |
   | E::active  | E 요소에 마우스 클릭 또는 키보드 엔터가 눌린 동안 E를 선택합니다. | 1, 2      | -                      |
   | E::hover   | E 요소에 마우스가 올라가 있는 동안 E를 선택합니다.           | 1, 2      | -                      |
   | E::focus   | E 요소에 포커스가 머물러 있는 동안 E를 선택합니다.           | 1, 2      | -                      |

8. 구조적 가상 클래스

   | 패턴                   | 의미                                                         | CSS Level | 지원하지 않는 브라우저 |
   | ---------------------- | ------------------------------------------------------------ | --------- | ---------------------- |
   | E::root                | 문서의 최상위 요소(html)를 선택합니다.                       | 3         | IE6, 7, 8              |
   | E::nth-child(n)        | 앞으로부터 지정된 순서와 일치하는 요소가 E 라면 선택합니다. (E 아닌 요소의 순서가 계산에 포함) | 3         | IE6, 7, 8              |
   | E::nth-last-child(n)   | 뒤로부터 지정된 순서와 일치하는 요소가 E 라면 선택합니다. (E 아닌 요소의 순서가 계산에 포함) | 3         | IE6, 7, 8              |
   | E::nth-of-type(n)      | E 요소 중 앞으로부터 순서가 일치하는 E 요소를 선택합니다. (E 요소의 순서만 계산에 포함) | 3         | IE6, 7, 8              |
   | E::nth-last-of-type(n) | E 요소 중 끝으로부터 순서가 일치하는 E 요소를 선택합니다. (E 요소의 순서만 계산에 포함) | 3         | IE6, 7, 8              |
   | E::first-child         | 첫 번째 등장하는 요소가 E 라면 선택합니다. (E 아닌 요소의 순서가 계산에 포함) | 2         | IE6                    |
   | E::last-child          | 마지막에 등장하는 요소가 E 라면 선택합니다. (E 아닌 요소의 순서가 계산에 포함) | 3         | IE6, 7, 8              |
   | E::first-of-type       | E 요소 중 첫 번째 E를 선택합니다.(E 요소의 순서만 계산에 포함) | 3         | IE6, 7, 8              |
   | E::last-of-type        | E 요소 중 마지막 E를 선택합니다.(E 요소의 순서만 계산에 포함) | 3         | IE6, 7, 8              |
   | E::only-child          | E 요소가 유일한 자식이면 선택합니다. (E 아닌 요소가 하나라도 포함되면 선택하지 않습니다.) | 3         | IE6, 7, 8              |
   | E::only-of-type        | E 요소가 유일한 타입이면 선택합니다. (E 아닌 요소가 포함되어도 E 타입이 유일하면 선택합니다.) | 3         | IE6, 7, 8              |
   | E::empty               | 텍스트 및 공백을 포함하여 자식 요소가 없는 E를 선택합니다.   | 3         | IE6, 7, 8              |

   

9. 그 외의 선택자

   1. 언어 선택자

      | 패턴        | 의미                                                     | CSS Level | 지원하지 않는 브라우저 |
      | ----------- | -------------------------------------------------------- | --------- | ---------------------- |
      | E::lang(ko) | HTML lang 속성의 값이 'ko'으로 지정된 요소를 선택합니다. | 2         | IE6, 7                 |

   2. 부정 선택자

      | 패턴      | 의미                          | CSS Level | 지원하지 않는 브라우저 |
      | --------- | ----------------------------- | --------- | ---------------------- |
      | E::not(S) | S가 아닌 E 요소를 선택합니다. | 3         | IE6, 7, 8              |

   3. 목적 선택자

      | 패턴      | 의미                                                         | CSS Level | 지원하지 않는 브라우저 |
      | --------- | ------------------------------------------------------------ | --------- | ---------------------- |
      | E::target | E의 URI가 요청되면 선택합니다. (따라서 E는 ID가 지정되어 있어야 합니다.) | 3         | IE6, 7, 8              |

   4. UI 요소 상태 선택자

      | 패턴        | 의미                                                         | CSS Level | 지원하지 않는 브라우저 |
      | ----------- | ------------------------------------------------------------ | --------- | ---------------------- |
      | E::enabled  | 사용 가능한 폼 콘트롤(input, textarea, select, button) E를 선택합니다. | 3         | IE6, 7, 8              |
      | E::disabled | 사용 불가능한 폼 콘트롤(input, textarea, select, button) E를 선택합니다. | 3         | IE6, 7, 8              |
      | E::checked  | 선택된 폼 콘트롤(input checked="checked")을 선택합니다.      | 3         | IE6, 7, 8              |

   5. 가상 엘리먼트 선택자

      | 패턴            | 의미                                           | CSS Level | 지원하지 않는 브라우저 |
      | --------------- | ---------------------------------------------- | --------- | ---------------------- |
      | E::first-line   | E 요소의 첫 번째 라인을 선택합니다.            | 1         | IE6                    |
      | E::first-letter | E 요소의 첫 번째 문자를 선택합니다.            | 1         | IE6                    |
      | E::before       | E 요소의 시작 지점에 생성된 요소를 선택합니다. | 2         | IE6, 7                 |
      | E::after        | E 요소의 끝 지점에 생성된 요소를 선택합니다.   | 2         | IE6, 7                 |

   ## CSS 우선순위

   ```
   !important > id [ 100 ] > class [ 10 ] > tag [ 1 ] > * [ 0 ]
   ```

   - ID 선택자의 갯수를 세어서 개당 100 으로 계산합니다. (= a)

   - 클래스 선택자의 갯수를 세어서 개당 10 으로 계산합니다. (= b)

   - 태그 선택자의 갯수를 세어서 개당 1 로 계산합니다. (= c)

   - 공용 선택자는 모두 0으로 계산합니다. (= d)

   - 가상 엘리먼트는 무시합니다

     

   

   

   



