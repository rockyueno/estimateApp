$(function () {

  //コンポーネントをインクルード
  $(".quote-header").load("component/quote_header.html");
  $(".info-basic").load("component/info.html");

  //テキストボックス選択時にカレンダーを表示する
  $("#desiredDeliveryDate").datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $("#deliveryDate").datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $("#checkDate").datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $("#submitDate").datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $("#quoteDateFrom").datepicker({
    dateFormat: 'yy/mm/dd'
  });
  $("#quoteDateTo").datepicker({
    dateFormat: 'yy/mm/dd'
  });
});

//見積検索を別ウィンドウで開く
$(document).on('click', '#search-window', function(){
  window.open('search.html', null, 'width=850,height=600,toolbar=yes,menubar=yes,scrollbars=yes');
  return false;
})

//予算を3桁区切り
$('#budget').on('blur', function(){
  var num = $(this).val();
  num = num.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');
  $(this).val(num);
});

//予算にフォーカス時3桁区切り解除
$('#budget').on('focus', function(){
  var num = $(this).val();
  num = num.replace(/,/g, '');
  $(this).val(num);
});

//販売区分の選択
$(document).on('change', 'input[name="sell-category"]', function(){
  var value = $(this).val();

  //直販のとき代理店ボックスを非活性
  if(value === "direct"){
    $('input[name="agency"]').prop('disabled', true);
  //代理店販売のとき代理店ボックスを活性
  }else if(value === "agency"){
    $('input[name="agency"]').prop('disabled', false);
  }
})

//建設見積の選択
$(document).on('change', 'input[name="relation"]', function(){
  var value = $(this).val();

  //関わるを選択したとき元請/下請を活性して公共/民間と新設/更新非活性
  if (value === "relate") {
    $("input[name=kubun]").prop('disabled', false);

    $("input[name=public]").prop('disabled', true);
    $("input[name=type]").prop('disabled', true);

    $("input[name=kubun]").prop('checked', false);
    $("input[name=public]").prop('checked', false);
    $("input[name=type]").prop('checked', false);

  //関わらないを選択したとき元請/下請と公共/民間と新設/更新非活性
  } else {
    $("input[name=kubun]").prop('disabled', true);
    $("input[name=public]").prop('disabled', true);
    $("input[name=type]").prop('disabled', true);

    $("input[name=kubun]").prop('checked', false);
    $("input[name=public]").prop('checked', false);
    $("input[name=type]").prop('checked', false);
  }
})

//元請/下請の選択
$(document).on('change', 'input[name="kubun"]', function(){
  var value = $(this).val();

  //元請工事を選択したとき公共/民間と新設/更新を活性
  if (value === "prime") {
    $("input[name=public]").prop('disabled', false);
    $("input[name=type]").prop('disabled', false);

    $("input[name=public]").prop('checked', false);
    $("input[name=type]").prop('checked', false);

  //下請工事を選択したとき公共/民間と新設/更新を非活性
  } else {
    $("input[name=public]").prop('disabled', true);
    $("input[name=type]").prop('disabled', true);

    $("input[name=public]").prop('checked', false);
    $("input[name=type]").prop('checked', false);
  }
})

//その他客先仕様のその他のチェック
$('input[name="otherSpec"]').change(function () {

  //チェックしたときテキストボックスを活性
  if ($('input[name="otherSpec"]').prop('checked')) {
    $('input[name="otherSpecText"]').prop("disabled", false);

  //チェックを外したときテキストボックスを非活性
  } else {
    $('input[name="otherSpecText"]').prop("disabled", true);
  }
});
