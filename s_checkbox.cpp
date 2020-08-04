#include <iostream>
#include <QMouseEvent>
#include "s_checkbox.h"
#include "graphicsview.h"


S_checkBox::S_checkBox(QWidget *parent) : QRadioButton(parent)
{
    std::cout<<"s check box!!!"<<std::endl;
}

void S_checkBox::checkState(bool startB, bool finishB)
{

    setCheckable(true);
    if(startB==true){

        setChecked(true);
    }else{
        setChecked(false);
    }

    Q_UNUSED(finishB);
}

void S_checkBox::mousePressEvent(QMouseEvent *event)
{
    event->accept();
}
