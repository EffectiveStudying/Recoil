# Why Recoil ?

-----

> [toc]

# About React State

## History of React State

- 기본적인 context, prop, state 가 유일한 상태 관리 방법

  => 큰 규모 서비스에서 관리가 어려워짐

- 2014 : Flux architecture 발표했으나 코드가 없었다

- 2015 : Redux release

  - 기능이 단순하고 기본만 갖춰짐 => 여러 요구사항을 다 만족시키지 못 (ex. 비동기 서버 통기)
  - MobX release

- 2020 : Recoil release "React 를 더 잘 지원할 목적으로 React 전용으로 작성"

  - vs `Context API` : 데이터마다 Context를 만들고 Provider를 제공해야  => if 사용해야 할 데이터가 많으면 (모든 전역 state를 한 context 에 몰아서 사용하기=>관련된 component가 너무 자주 rendering 시도 or 데이터마다 )

- component state 



# Redux vs Recoil

- 공통 : react 를 위한 상태관리 (state management) 라이브러리, BUT, Redux&MobX는 React라이브러리가 아니었다.
- Flux Architecture 기반 vs Atomic Model 기반
  - Atom : 작은 상태 단위, Atom 끼리 결합해서 data 가공

- 





# Context API vs Recoil

- 공통 :





# Recoil

- 











------



상태관리, 이제 Recoil 하세요. / FEConf Korea

