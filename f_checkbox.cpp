#include <QMouseEvent>
#include "f_checkbox.h"

F_checkBox::F_checkBox(QWidget *parent) : QRadioButton(parent)
{

}

void F_checkBox::checkState(bool startB, bool finishB)
{

    setCheckable(true);
    if(finishB==true){
        setChecked(true);
    }else{
        setChecked(false);
    }

    Q_UNUSED(startB);
}

void F_checkBox::mousePressEvent(QMouseEvent *event)
{
    event->accept();

}
