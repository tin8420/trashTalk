
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '爆肝寫code', '拚一下side-project'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['超簡單', '超容易', '超快', '超正常', '超級爽', '沒毛病', '有點抖']



function RandomArray(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(person) {
  let trashTalk = ''
  const IndexOfPhrase = Math.floor(Math.random() * phrase.length)
  switch (person) {
    case 'engineer':
      trashTalk = '身為工程師 ，' + RandomArray(task.engineer)
      break
    case 'designer':
      trashTalk = '身為設計師 ，' + RandomArray(task.designer)
      break
    case 'entrepreneur':
      trashTalk = '身為創業家，' + RandomArray(task.entrepreneur)
      break
    default:
      return trashTalk = '請選擇噴幹話對象!!!'
  }
  return trashTalk += phrase[IndexOfPhrase]
}

module.exports = generateTrashTalk