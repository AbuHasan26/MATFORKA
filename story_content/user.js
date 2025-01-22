function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nQBFPv6GHX":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="mymusic.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

