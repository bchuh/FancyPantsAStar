#ifndef S_CHECKBOX_H
#define S_CHECKBOX_H

#include <QRadioButton>

class S_checkBox : public QRadioButton
{
    Q_OBJECT
public:
    explicit S_checkBox(QWidget *parent = nullptr);

public slots:
    void checkState(bool startB,bool finishB);


    // QWidget interface
protected:
    void mousePressEvent(QMouseEvent *event);
};

#endif // S_CHECKBOX_H
