import React from 'react';

export default ({ players }) => {
  return (
    <div className="total-list__toggle" onClick={ toggleTotalList }>遊戲<br/>記錄</div>
  )
}


let ListActive = false;
function toggleTotalList() {
  let list = document.getElementById('total-list').classList
  console.log(ListActive)
  if (ListActive) {
    list.remove('active');
  } else {
    list.add('active');
  }
  ListActive = !ListActive
}