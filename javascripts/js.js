var i = 0;
var txt = 'ЭТО ДАНИЛ.';
var speed = 50;
$(document).ready(function firststring() {
$(document).ready(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("starttext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});
});
var k = 0;
var txt1 = 'ДАНИЛ ОЧЕНЬ МНОГО ГРЕШИЛ ПРИ ЖИЗНИ.';
setTimeout(function secondstring() {
$(document).ready(function typeWriter1() {
  if (k < txt1.length) {
    document.getElementById("starttext1").innerHTML += txt1.charAt(k);
    k++;
    setTimeout(typeWriter1, speed);
  };
});
},1000);
var u = 0;
var txt2 = 'ТВОЯ ЗАДАЧА – ПОМОЧЬ ЕМУ ИСКУПИТЬ ГРЕХИ.';
setTimeout(function thirdstring() {
$(document).ready(function typeWriter2() {
  if (u < txt2.length) {
    document.getElementById("starttext2").innerHTML += txt2.charAt(u);
    u++;
    setTimeout(typeWriter2, speed);
  };
});
},3300);
$(document).ready(function(){
$("#starticon1").click(function(){
    $("#hammer").css("animation-play-state", "running");
    setTimeout(function() {
       $("#hammer").css("animation-play-state", "paused");
     }, 400);
     $("#starticon1").css("display", "none");
     setTimeout(function() {
        $(".start2").css("animation-play-state", "running");
      }, 500);
      setTimeout(function() {
         $(".start2").css("display", "none");
       }, 990);
       setTimeout(function() {
          $(".start3").css("display", "block");
          $(".start3").css("animation-play-state", "running");
        }, 500);
});
});
$(document).ready(function(){
$(".start1").click(function(){
    $(".start1").css("display", "none");
    $(".start2").css("display", "block");
});
});
$(document).ready(function(){
$(".lanceicon, .flameicon, .headicon, .weighticon, .lightningicon, .eyeicon").click(function(){
    $(".icons").css("animation-play-state", "running");
    setTimeout(function() {
       $(".icons").css("animation-play-state", "paused");
     }, 2000);
     setTimeout(function() {
        $(".icons").css("animation-play-state", "running");
      }, 7000);
      setTimeout(function() {
         $(".icons").css("animation-play-state", "paused");
       }, 9000);
     $(".person2").css("animation-play-state", "running");
     setTimeout(function() {
        $(".person2").css("animation-play-state", "paused");
      }, 950);
});
});
$(document).ready(function(){
$(".lightningicon").click(function(){
    setTimeout(function() {
       $(".lightningp").css("display", "block");
     }, 2000);
      $(".lightningp").css("animation-play-state", "running");
      setTimeout(function() {
         $(".person2").css("opacity", 0);
       }, 2010);
       setTimeout(function() {
          $(".person2").css("animation-play-state", "running");
        }, 2010);
        setTimeout(function() {
           $(".person2").css("animation-play-state", "paused");
         }, 3010);
       setTimeout(function() {
          $(".flash").css("display", "block");
        }, 2000);
         $(".flash").css("animation-play-state", "running");
         setTimeout(function() {
            $(".lightningp").css("display", "none");
          }, 4000);
          setTimeout(function() {
             $("#lightningtext").css("display", "block");
           }, 2000);
          var r = 0;
          var txt5 = 'БЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗ';
          setTimeout(function lightstring() {
          $(document).ready(function typeWriter3() {
            if (r < txt5.length) {
              document.getElementById("lightningtext").innerHTML += txt5.charAt(r);
              r++;
              setTimeout(typeWriter3, speed);
            };
          });
        },2000);
          $("#lightningtext").html("");
        setTimeout(function() {
           $("#lightningtext").css("display", "none");
         }, 4000);
          setTimeout(function() {
             $(".flash").css("display", "none");
           }, 4000);
           setTimeout(function() {
              $(".lightedp").css("display", "block");
            }, 5000);
            setTimeout(function() {
               $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("display", "block");
             }, 5000);
             setTimeout(function() {
                $(".frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "running");
              }, 5000);
              setTimeout(function() {
                 $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4").css("display", "none");
               }, 6000);
               setTimeout(function() {
                  $(".frag, .frag1, .frag2, .frag3, .frag4").css("animation-play-state", "paused");
                }, 7000);
                setTimeout(function() {
                   $(".frag5, .frag6, .frag7, .frag8, .frag9").css("display", "none");
                 }, 5500);
                 setTimeout(function() {
                    $(".frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "paused");
                  }, 6000);
            setTimeout(function() {
               $(".lightedp").css("animation-play-state", "running");
             }, 7000);
             setTimeout(function() {
                $(".lightedp").css("display", "none");
              }, 9000);
              setTimeout(function() {
                 $(".lightedp").css("animation-play-state", "paused");
               }, 11000);
              setTimeout(function() {
                 $(".person2").css("opacity", 100);
               }, 7900);
               setTimeout(function() {
                  $(".person2").css("opacity", 0);
                }, 8000);
                setTimeout(function() {
                   $(".person2").css("opacity", 100);
                 }, 8100);
                 setTimeout(function() {
                    $(".person2").css("opacity", 100);
                  }, 8200);
                  setTimeout(function() {
                     $(".person2").css("opacity", 0);
                   }, 8300);
                   setTimeout(function() {
                      $(".person2").css("opacity", 100);
                    }, 8400);
                    setTimeout(function() {
                       $(".person2").css("opacity", 0);
                     }, 8500);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 8600);
                      setTimeout(function() {
                         $(".person2").css("opacity", 100);
                       }, 8700);
});
});
$(document).ready(function(){
$(".weighticon").click(function(){
  setTimeout(function() {
     $(".boomd").css("display", "block");
   }, 2000);
   $(".weightd").css("display", "block");
   setTimeout(function() {
      $(".weightd").css("animation-play-state", "running");
    }, 3000);
    setTimeout(function() {
       $(".weightd").css("animation-play-state", "paused");
     }, 3500);
     $(".person2").css("z-index", -2);
      setTimeout(function() {
         $(".person2").css("opacity", 0);
       }, 3500);
       setTimeout(function() {
          $(".person2").css("animation-play-state", "running");
        }, 3500);
        setTimeout(function() {
           $(".person2").css("animation-play-state", "paused");
         }, 4500);
       setTimeout(function() {
          $(".linesd").css("display", "block");
        }, 3500);
        setTimeout(function() {
           $(".linesd").css("display", "none");
         }, 4500);
         setTimeout(function() {
            $(".boomd").css("display", "none");
          }, 4500);
          setTimeout(function() {
             $(".weightd").css("animation-play-state", "running");
           }, 5000);
           setTimeout(function() {
              $(".frag10").css("display", "block");
            }, 6000);
            setTimeout(function() {
               $(".frag10").css("animation-play-state", "running");
             }, 6000);
               setTimeout(function() {
                  $(".frag10").css("display", "none");
                }, 6500);
                setTimeout(function() {
                   $(".frag10").css("animation-play-state", "paused");
                 }, 7000);
           setTimeout(function() {
              $(".weightd").css("animation-play-state", "paused");
            }, 5500);
            setTimeout(function() {
               $(".weightd").css("display", "none");
             }, 5500);
            setTimeout(function() {
               $(".damagedd").css("display", "block");
             }, 4500);
             setTimeout(function() {
                $(".damagedd").css("animation-play-state", "running");
              }, 7000);
              setTimeout(function() {
                 $(".damagedd").css("display", "none");
               }, 9000);
               setTimeout(function() {
                  $(".damagedd").css("animation-play-state", "paused");
                }, 11000);
                setTimeout(function() {
                   $(".person2").css("opacity", 100);
                 }, 7900);
                 setTimeout(function() {
                    $(".person2").css("opacity", 0);
                  }, 8000);
                  setTimeout(function() {
                     $(".person2").css("opacity", 100);
                   }, 8100);
                   setTimeout(function() {
                      $(".person2").css("opacity", 100);
                    }, 8200);
                    setTimeout(function() {
                       $(".person2").css("opacity", 0);
                     }, 8300);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 8400);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 8500);
                       setTimeout(function() {
                          $(".person2").css("opacity", 100);
                        }, 8600);
                        setTimeout(function() {
                           $(".person2").css("opacity", 100);
                         }, 8700);
});
});
$(document).ready(function(){
$(".flameicon").click(function(){
   $(".flamed").css("display", "block");
   setTimeout(function() {
      $(".flamed").css("animation-play-state", "running");
    }, 2000);
    setTimeout(function() {
       $(".flamed").css("animation-play-state", "paused");
     }, 3000);
     setTimeout(function() {
        $("#flametext").css("display", "block");
      }, 2000);
     var l = 0;
     var txt6 = 'ПФФФФФФФФФФФФФФ';
     setTimeout(function flamestring() {
     $(document).ready(function typeWriter4() {
       if (l < txt6.length) {
         document.getElementById("flametext").innerHTML += txt6.charAt(l);
         l++;
         setTimeout(typeWriter4, 200);
       };
     });
   },2000);
     $("#flametext").html("");
   setTimeout(function() {
      $("#flametext").css("display", "none");
    }, 4300);
     $(".person2").css("z-index", -2);
     setTimeout(function() {
        $(".person2").css("opacity", 0);
      }, 3000);
      setTimeout(function() {
         $(".person2").css("animation-play-state", "running");
       }, 3000);
       setTimeout(function() {
          $(".person2").css("animation-play-state", "paused");
        }, 4000);
      setTimeout(function() {
         $(".flamed").css("margin-top", +10);
       }, 3000);
       setTimeout(function() {
          $(".flamed").css("margin-top", -10);
        }, 3100);
        setTimeout(function() {
           $(".flamed").css("margin-top", +10);
         }, 3200);
         setTimeout(function() {
            $(".flamed").css("margin-top", -10);
          }, 3300);
          setTimeout(function() {
             $(".flamed").css("margin-top", +10);
           }, 3400);
           setTimeout(function() {
              $(".flamed").css("margin-top", -10);
            }, 3500);
            setTimeout(function() {
               $(".flamed").css("margin-top", +10);
             }, 3600);
             setTimeout(function() {
                $(".flamed").css("margin-top", -10);
              }, 3700);
              setTimeout(function() {
                 $(".flamed").css("margin-top", +10);
               }, 3800);
               setTimeout(function() {
                  $(".flamed").css("margin-top", -10);
                }, 3900);
                setTimeout(function() {
                   $(".flamed").css("margin-top", +10);
                 }, 4000);
                 setTimeout(function() {
                    $(".flamed").css("margin-top", -10);
                  }, 4100);
                  setTimeout(function() {
                     $(".flamed").css("margin-top", +10);
                   }, 4200);
                   setTimeout(function() {
                      $(".flamed").css("margin-top", -10);
                    }, 4300);
                setTimeout(function() {
                   $(".burnd").css("display", "block");
                 }, 4300);
                 setTimeout(function() {
                    $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("display", "block");
                  }, 4300);
                  setTimeout(function() {
                     $(".frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "running");
                   }, 4300);
                   setTimeout(function() {
                      $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4").css("display", "none");
                    }, 5300);
                    setTimeout(function() {
                       $(".frag, .frag1, .frag2, .frag3, .frag4").css("animation-play-state", "paused");
                     }, 6300);
                     setTimeout(function() {
                        $(".frag5, .frag6, .frag7, .frag8, .frag9").css("display", "none");
                      }, 4800);
                      setTimeout(function() {
                         $(".frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "paused");
                       }, 5300);
                setTimeout(function() {
                   $(".flamed").css("animation-play-state", "running");
                 }, 4300);
                 setTimeout(function() {
                    $(".flamed").css("animation-play-state", "paused");
                  }, 5300);
                  setTimeout(function() {
                     $(".burnd").css("animation-play-state", "running");
                   }, 7000);
                   setTimeout(function() {
                      $(".burnd").css("display", "none");
                    }, 9000);
                    setTimeout(function() {
                       $(".burnd").css("animation-play-state", "paused");
                     }, 11000);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 7900);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 8000);
                       setTimeout(function() {
                          $(".person2").css("opacity", 100);
                        }, 8100);
                        setTimeout(function() {
                           $(".person2").css("opacity", 100);
                         }, 8200);
                         setTimeout(function() {
                            $(".person2").css("opacity", 0);
                          }, 8300);
                          setTimeout(function() {
                             $(".person2").css("opacity", 100);
                           }, 8400);
                           setTimeout(function() {
                              $(".person2").css("opacity", 0);
                            }, 8500);
                            setTimeout(function() {
                               $(".person2").css("opacity", 100);
                             }, 8600);
                             setTimeout(function() {
                                $(".person2").css("opacity", 100);
                              }, 8700);
});
});
$(document).ready(function(){
$(".eyeicon").click(function(){
  setTimeout(function() {
     $(".eyespd").css("display", "block");
   }, 2000);
      setTimeout(function() {
         $(".person2").css("opacity", 0);
       }, 2000);
       setTimeout(function() {
          $(".person2").css("animation-play-state", "running");
        }, 3500);
        setTimeout(function() {
           $(".person2").css("animation-play-state", "paused");
         }, 4500);
         setTimeout(function() {
            $(".eyes").css("display", "block");
          }, 2500);
          setTimeout(function() {
             $(".eyes1").css("display", "block");
           }, 2700);
           setTimeout(function() {
              $(".eyes2").css("display", "block");
            }, 2900);
            setTimeout(function() {
               $(".eyes3").css("display", "block");
             }, 3100);
             setTimeout(function() {
             $(".eyes4").css("display", "block");
           }, 3300);
           setTimeout(function() {
              $(".eyes5").css("display", "block");
            }, 3500);
            setTimeout(function() {
               $(".eyes6").css("display", "block");
             }, 3700);
             setTimeout(function() {
                $(".eyes7").css("display", "block");
              }, 3900);
              setTimeout(function() {
                 $(".eyes8").css("display", "block");
               }, 4100);
               setTimeout(function() {
                  $(".eyes9").css("display", "block");
                }, 4300);
                setTimeout(function() {
                   $(".ai").css("display", "block");
                 }, 3100);
                 setTimeout(function() {
                 $(".ai1").css("display", "block");
               }, 3300);
               setTimeout(function() {
                  $(".ai2").css("display", "block");
                }, 3500);
                setTimeout(function() {
                   $(".ai3").css("display", "block");
                 }, 3700);
                 setTimeout(function() {
                    $(".ai4").css("display", "block");
                  }, 3900);
                  setTimeout(function() {
                     $(".ai5").css("display", "block");
                   }, 4100);
                   setTimeout(function() {
                      $(".ai6").css("display", "block");
                    }, 4300);
                    setTimeout(function() {
                       $(".ai7").css("display", "block");
                     }, 4400);
                     setTimeout(function() {
                        $(".ai8").css("display", "block");
                      }, 4500);
                      setTimeout(function() {
                         $(".ai9").css("display", "block");
                       }, 4600);
                       setTimeout(function() {
                          $(".eyes, .eyes1, .eyes2, .eyes3, .eyes4, .eyes5, .eyes6, .eyes7, .eyes8, .eyes9").css("animation-play-state", "running");
                        }, 6000);
                        setTimeout(function() {
                           $(".eyes, .eyes1, .eyes2, .eyes3, .eyes4, .eyes5, .eyes6, .eyes7, .eyes8, .eyes9").css("animation-play-state", "paused");
                         }, 7000);
                        setTimeout(function() {
                           $(".eyes, .eyes1, .eyes2, .eyes3, .eyes4, .eyes5, .eyes6, .eyes7, .eyes8, .eyes9").css("display", "none");
                         }, 7000);
                       setTimeout(function() {
                          $(".ai, .ai1, .ai2, .ai3, .ai4, .ai5, .ai6, .ai7, .ai8, .ai9").css("display", "none");
                        }, 5000);
                        setTimeout(function() {
                           $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("display", "block");
                         }, 5000);
                         setTimeout(function() {
                            $(".frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "running");
                          }, 5000);
                          setTimeout(function() {
                             $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4").css("display", "none");
                           }, 6000);
                           setTimeout(function() {
                              $(".frag, .frag1, .frag2, .frag3, .frag4").css("animation-play-state", "paused");
                            }, 7000);
                            setTimeout(function() {
                               $(".frag5, .frag6, .frag7, .frag8, .frag9").css("display", "none");
                             }, 5500);
                             setTimeout(function() {
                                $(".frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "paused");
                              }, 6000);
                        setTimeout(function() {
                           $(".eyespd").css("display", "none");
                         }, 5000);
                        setTimeout(function() {
                           $(".skeletd").css("display", "block");
                         }, 5000);
                         setTimeout(function() {
                            $(".skeletd").css("z-index", 1 );
                          }, 5000);
                        setTimeout(function() {
                           $(".skeletd").css("animation-play-state", "running");
                         }, 7000);
                         setTimeout(function() {
                            $(".skeletd").css("display", "none");
                          }, 9000);
                          setTimeout(function() {
                             $(".skeletd").css("animation-play-state", "paused");
                           }, 11000);
                setTimeout(function() {
                   $(".person2").css("opacity", 100);
                 }, 7900);
                 setTimeout(function() {
                    $(".person2").css("opacity", 0);
                  }, 8000);
                  setTimeout(function() {
                     $(".person2").css("opacity", 100);
                   }, 8100);
                   setTimeout(function() {
                      $(".person2").css("opacity", 100);
                    }, 8200);
                    setTimeout(function() {
                       $(".person2").css("opacity", 0);
                     }, 8300);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 8400);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 8500);
                       setTimeout(function() {
                          $(".person2").css("opacity", 100);
                        }, 8600);
                        setTimeout(function() {
                           $(".person2").css("opacity", 100);
                         }, 8700);
});
});
$(document).ready(function(){
$(".lanceicon").click(function(){
  setTimeout(function() {
     $(".lancesld").css("animation-play-state", "running");
   }, 950);
   setTimeout(function() {
      $(".vzhuhd").css("display", "block");
    }, 950);
   setTimeout(function() {
      $(".lancesld").css("animation-play-state", "paused");
    }, 1950);
   setTimeout(function() {
      $(".leftd").css("display", "block");
    }, 1950);
      setTimeout(function() {
         $(".person2").css("opacity", 0);
       }, 1950);
       setTimeout(function() {
          $(".lancesrd").css("animation-play-state", "running");
        }, 1950);
        setTimeout(function() {
           $(".vzhuhd2").css("display", "block");
         }, 1950);
        setTimeout(function() {
           $(".lancesrd").css("animation-play-state", "paused");
         }, 2950);
         setTimeout(function() {
            $(".leftd").css("display", "none");
          }, 2950);
          setTimeout(function() {
             $(".rightd").css("display", "block");
           }, 2950);
           setTimeout(function() {
              $(".lancesld").css("animation-play-state", "running");
            }, 4000);
            setTimeout(function() {
               $(".lancesld").css("animation-play-state", "paused");
             }, 5000);
             setTimeout(function() {
                $(".lancesrd").css("animation-play-state", "running");
              }, 4000);
              setTimeout(function() {
                 $(".lancesrd").css("animation-play-state", "paused");
               }, 5000);
               setTimeout(function() {
                  $(".vzhuhd").css("display", "none");
                }, 4000);
                setTimeout(function() {
                   $(".vzhuhd2").css("display", "none");
                 }, 4000);
               setTimeout(function() {
                  $(".person2").css("opacity", 100);
                }, 5000);
                setTimeout(function() {
                   $(".rightd").css("display", "none");
                 }, 5000);
                 setTimeout(function() {
                    $(".lancesfd").css("animation-play-state", "running");
                  }, 5000);
                  setTimeout(function() {
                     $(".lancesfd").css("animation-play-state", "paused");
                   }, 6000);
                   setTimeout(function() {
                      $(".frag10").css("display", "block");
                    }, 6000);
                    setTimeout(function() {
                       $(".frag10").css("animation-play-state", "running");
                     }, 6000);
                       setTimeout(function() {
                          $(".frag10").css("display", "none");
                        }, 6500);
                        setTimeout(function() {
                           $(".frag10").css("animation-play-state", "paused");
                         }, 7000);
                   setTimeout(function() {
                      $(".aijd").css("display", "block");
                    }, 6000);
                   setTimeout(function() {
                      $(".jumpd").css("display", "block");
                    }, 6000);
                    setTimeout(function() {
                       $(".jumpd").css("animation-play-state", "running");
                     }, 6000);
                     setTimeout(function() {
                        $(".jumpd").css("display", "none");
                      }, 8000);
                      setTimeout(function() {
                         $(".aijd").css("display", "none");
                       }, 7000);
                      setTimeout(function() {
                         $(".lancesfd").css("animation-play-state", "running");
                       }, 7000);
                       setTimeout(function() {
                          $(".lancesfd").css("animation-play-state", "paused");
                        }, 8000);
                      setTimeout(function() {
                         $(".jumpd").css("animation-play-state", "paused");
                       }, 10000);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 6000);
                       setTimeout(function() {
                          $(".person2").css("animation-play-state", "running");
                        }, 6100);
                        setTimeout(function() {
                           $(".person2").css("animation-play-state", "paused");
                         }, 7100);
                setTimeout(function() {
                   $(".person2").css("opacity", 100);
                 }, 7900);
                 setTimeout(function() {
                    $(".person2").css("opacity", 0);
                  }, 8000);
                  setTimeout(function() {
                     $(".person2").css("opacity", 100);
                   }, 8100);
                   setTimeout(function() {
                      $(".person2").css("opacity", 100);
                    }, 8200);
                    setTimeout(function() {
                       $(".person2").css("opacity", 0);
                     }, 8300);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 8400);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 8500);
                       setTimeout(function() {
                          $(".person2").css("opacity", 100);
                        }, 8600);
                        setTimeout(function() {
                           $(".person2").css("opacity", 100);
                         }, 8700);
});
});
$(document).ready(function(){
$(".headicon").click(function(){
  setTimeout(function() {
     $("#walltext").css("display", "block");
   }, 950);
  var m = 0;
  var txt7 = 'КХХХХХХХХХХХХХХХХ';
  setTimeout(function wallstring() {
  $(document).ready(function typeWriter5() {
    if (m < txt7.length) {
      document.getElementById("walltext").innerHTML += txt7.charAt(m);
      m++;
      setTimeout(typeWriter5, 400);
    };
  });
},950);
  $("#walltext").html("");
setTimeout(function() {
   $("#walltext").css("display", "none");
 }, 4500);
  setTimeout(function() {
     $(".wall1").css("animation-play-state", "running");
   }, 950);
   setTimeout(function() {
      $(".wall2").css("animation-play-state", "running");
    }, 950);
   setTimeout(function() {
      $(".person2").css("opacity", 0);
    }, 2100);
    setTimeout(function() {
       $(".stopp").css("display", "block");
     }, 2100);
     setTimeout(function() {
        $(".wall1").css("animation-play-state", "paused");
      }, 2450);
      setTimeout(function() {
         $(".wall2").css("animation-play-state", "paused");
       }, 2450);
       setTimeout(function() {
          $(".wall1").css("animation-play-state", "running");
        }, 3000);
        setTimeout(function() {
           $(".wall2").css("animation-play-state", "running");
         }, 3000);
         setTimeout(function() {
            $(".wall1").css("animation-play-state", "paused");
          }, 4500);
          setTimeout(function() {
             $(".wall2").css("animation-play-state", "paused");
           }, 4500);
           setTimeout(function() {
              $(".chpokd").css("display", "block");
            }, 4500);
            setTimeout(function() {
               $(".headp").css("animation-play-state", "running");
             }, 5000);
             setTimeout(function() {
                $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("display", "block");
              }, 5000);
              setTimeout(function() {
                 $(".frag, .frag1, .frag2, .frag3, .frag4, .frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "running");
               }, 5000);
               setTimeout(function() {
                  $(".fargd, .frag, .frag1, .frag2, .frag3, .frag4").css("display", "none");
                }, 6000);
                setTimeout(function() {
                   $(".frag, .frag1, .frag2, .frag3, .frag4").css("animation-play-state", "paused");
                 }, 7000);
                 setTimeout(function() {
                    $(".frag5, .frag6, .frag7, .frag8, .frag9").css("display", "none");
                  }, 5500);
                  setTimeout(function() {
                     $(".frag5, .frag6, .frag7, .frag8, .frag9").css("animation-play-state", "paused");
                   }, 6000);
             setTimeout(function() {
                $(".headp").css("animation-play-state", "paused");
              }, 6000);
              setTimeout(function() {
                 $(".chpokd").css("display", "none");
               }, 6000);
              setTimeout(function() {
                 $(".headp").css("animation-play-state", "paused");
               }, 7000);
               setTimeout(function() {
                  $(".wall1").css("animation-play-state", "running");
                }, 6000);
                setTimeout(function() {
                   $(".wall2").css("animation-play-state", "running");
                 }, 6000);
                 setTimeout(function() {
                    $(".bodyp").css("animation-play-state", "running");
                  }, 6000);
                  setTimeout(function() {
                     $(".bodyp").css("animation-play-state", "paused");
                   }, 10000);
                   setTimeout(function() {
                      $(".stopp").css("display", "none");
                    }, 8000);
                    setTimeout(function() {
                       $(".headp").css("animation-play-state", "running");
                     }, 8000);
                     setTimeout(function() {
                        $(".headp").css("animation-play-state", "paused");
                      }, 9000);
                 setTimeout(function() {
                    $(".wall1").css("animation-play-state", "paused");
                  }, 9000);
                  setTimeout(function() {
                     $(".wall2").css("animation-play-state", "paused");
                   }, 9000);
                       setTimeout(function() {
                          $(".person2").css("animation-play-state", "running");
                        }, 6100);
                        setTimeout(function() {
                           $(".person2").css("animation-play-state", "paused");
                         }, 7100);
                setTimeout(function() {
                   $(".person2").css("opacity", 100);
                 }, 7900);
                 setTimeout(function() {
                    $(".person2").css("opacity", 0);
                  }, 8000);
                  setTimeout(function() {
                     $(".person2").css("opacity", 100);
                   }, 8100);
                   setTimeout(function() {
                      $(".person2").css("opacity", 100);
                    }, 8200);
                    setTimeout(function() {
                       $(".person2").css("opacity", 0);
                     }, 8300);
                     setTimeout(function() {
                        $(".person2").css("opacity", 100);
                      }, 8400);
                      setTimeout(function() {
                         $(".person2").css("opacity", 0);
                       }, 8500);
                       setTimeout(function() {
                          $(".person2").css("opacity", 100);
                        }, 8600);
                        setTimeout(function() {
                           $(".person2").css("opacity", 100);
                         }, 8700);
});
});

let count1 = 0;
$(document).ready(function () {
let count = 0;
$(".lanceicon, .flameicon, .headicon, .weighticon, .lightningicon, .eyeicon").click(function () {
count += 1;
if (count == 1) {
$(".string").css("display", "none");
$(".stringn").css("display", "block");
};
if (count == 2) {
$(".stringn").css("display", "none");
$(".stringn1").css("display", "block");
};
if (count == 3) {
$(".stringn1").css("display", "none");
$(".stringn2").css("display", "block");
};
if (count == 4) {
$(".stringn2").css("display", "none");
$(".stringn3").css("display", "block");
};
if (count == 5) {
$(".stringn3").css("display", "none");
$(".stringn5").css("display", "block");
};
if (count == 6) {
$(".stringn5").css("display", "none");
$(".stringn6").css("display", "block");
$(function () {
$(".lanceicon").click(function () {
  count1 += 1;
  if (count1 == 1) {
    setTimeout(function() {
       $(".start3").css("display", "none");
     }, 7800);
     setTimeout(function() {
       $(".end5").css("display", "block");
        $(".start4").css("display", "block");
        $(".start4").css("animation-play-state", "running");
      }, 7800);
      setTimeout(function() {
         $(".icons").css("opacity", 0);
       }, 2000);
  };
  });
  $(".headicon").click(function () {
    count1 += 2;
    if (count1 == 2) {
      setTimeout(function() {
         $(".start3").css("display", "none");
       }, 7800);
       setTimeout(function() {
         $(".end6").css("display", "block");
          $(".start4").css("display", "block");
          $(".start4").css("animation-play-state", "running");
        }, 7800);
        setTimeout(function() {
           $(".icons").css("opacity", 0);
         }, 2000);
    };
    });
    $(".weighticon").click(function () {
      count1 += 3;
      if (count1 == 3) {
         setTimeout(function() {
            $(".start3").css("display", "none");
          }, 7800);
          setTimeout(function() {
            $(".end1").css("display", "block");
             $(".start4").css("display", "block");
             $(".start4").css("animation-play-state", "running");
           }, 7800);
           setTimeout(function() {
              $(".icons").css("opacity", 0);
            }, 2000);
      };
      });
      $(".flameicon").click(function () {
        count1 += 4;
        if (count1 == 4) {
          setTimeout(function() {
             $(".start3").css("display", "none");
           }, 7800);
           setTimeout(function() {
             $(".end3").css("display", "block");
              $(".start4").css("display", "block");
              $(".start4").css("animation-play-state", "running");
            }, 7800);
            setTimeout(function() {
               $(".icons").css("opacity", 0);
             }, 2000);
        };
        });
        $(".eyeicon").click(function () {
          count1 += 5;
          if (count1 == 5) {
            setTimeout(function() {
               $(".start3").css("display", "none");
             }, 7800);
             setTimeout(function() {
               $(".end4").css("display", "block");
                $(".start4").css("display", "block");
                $(".start4").css("animation-play-state", "running");
              }, 7800);
              setTimeout(function() {
                 $(".icons").css("opacity", 0);
               }, 2000);
          };
          });
          $(".lightningicon").click(function () {
            count1 += 6;
            if (count1 == 6) {
              setTimeout(function() {
                 $(".start3").css("display", "none");
               }, 7800);
               setTimeout(function() {
                 $(".end2").css("display", "block");
                  $(".start4").css("display", "block");
                  $(".start4").css("animation-play-state", "running");
                }, 7800);
                setTimeout(function() {
                   $(".icons").css("opacity", 0);
                 }, 2000);
            };
            });
});
};
if (count == 7) {
  $(".stringn6").css("display", "none");
  $(".stringn7").css("display", "block");
};
});
});
$(document).ready(function(){
$(".restart").click(function(){
    window.location.reload();

});
});
