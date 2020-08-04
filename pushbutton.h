#ifndef PUSHBUTTON_H
#define PUSHBUTTON_H

#include <QPushButton>

class pushButton : public QPushButton
{
    Q_OBJECT
private:
    int clickCount; //0-2
public:
    explicit pushButton(QWidget *parent = nullptr);
    bool mouseEvent_Blocked;
public slots:
    void checkButtonState(bool start,bool finish);
    void checkButtonState_finished(bool state);


    // QWidget interface
protected:
    void mousePressEvent(QMouseEvent *event);
};

#endif // PUSHBUTTON_H
