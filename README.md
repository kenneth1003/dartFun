http://dartslive.herokuapp.com/

## Dart Fun
Simple Dart Score keeping application for 01 and cricket games.

## Development
```
cd public
npm start
```


謝謝各位面試官今天的時間跟指教！
在面試的過程中覺得能更看清楚自己的能力和經驗還有很多需要加強的地方，

想要對今天面試的問題做一些小小的補充：
1. CSS header position
應該是說可以延後呈現的CSS可以放在後面而不是用不到的CSS。彈窗或者需要一些input才會顯示的UI，可以考慮優先權比較低的載入，但這樣可能要衡量 race condition。

2. vendor Cache Control
如果 bundle 都有 hash，html 永遠都不會被 cached 的話，bundle cache-control 的確是可以設定 max-age 沒有問題，目前開發的習慣以功能正常性為優先，所以面試中回答了保險起見還是不要設 max-age 就不會出錯

3. 每日精選實作
後面比較專注在樣式實作，沒有回頭把多個 card 補上，所以漏了 card-list (card 的container)的樣式，應該要設 display: flex 和 flex-wrap: wrap

以上
謝謝！
