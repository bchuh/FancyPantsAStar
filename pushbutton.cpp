#include <QMouseEvent>
#include <iostream>
#include "pushbutton.h"

pushButton::pushButton(QWidget *parent)
    : QPushButton(parent),
      clickCount(0),
      mouseEvent_Blocked(false)
{
    setDisabled(true);
    /*
    setCursor(QCursor(Qt::ForbiddenCursor));
    setFlat(true);
    setText("Right-click the map to set "Obstacles".\nLeft-click to set the "Starting/Finishing Point".\n");
    */
}

void pushButton::checkButtonState(bool start, bool finish)
{
    if(start==true && finish==true){

        setFlat(false);
        setText("Press To Start");
        setDisabled(false);
        setCursor(QCursor(Qt::ArrowCursor));
    }else{
        setFlat(true);
        setText("Right-click the map to set \"Obstacles\".\nLeft-click to set the \"Starting/Finishing Point\".\n");
        setDisabled(true);
        setCursor(QCursor(Qt::ForbiddenCursor));
    }
    if(clickCount>0)
        clickCount=0;
}

void pushButton::checkButtonState_finished(bool state)
{
    mouseEvent_Blocked=false;
    clickCount=2;
    if(state==true){
        setFlat(false);
        setDisabled(false);
        setText(" Found a path :) \n Press to start a new demo ");
    }else{
        setFlat(false);
        setDisabled(false);
        setText(" No path found :( \n Press to start a new demo ");
    }
}

void pushButton::mousePressEvent(QMouseEvent *event)
{

    if(mouseEvent_Blocked==true&&clickCount<=0){
        event->accept();
    }else{

       if(clickCount==1){
           QPushButton::mousePressEvent(event);
            std::cout<<"number"<<std::endl;
            mouseEvent_Blocked=false;
            setDisabled(true);

           clickCount--;
           return;
       }else if(clickCount==2){

            std::cout<<"number2"<<std::endl;
            QPushButton::mousePressEvent(event);
            setFlat(true);
            setText("Right-click the map to set \"Obstacles\".\nLeft-click to set the \"Starting/Finishing Point\".\n");
     //       setDisabled(true);
            setCursor(QCursor(Qt::ForbiddenCursor));
           clickCount--;
           return;
       }
        mouseEvent_Blocked=true;
        return QPushButton::mousePressEvent(event);
    }
}
