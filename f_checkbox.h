#ifndef F_CHECKBOX_H
#define F_CHECKBOX_H

#include <QRadioButton>


class F_checkBox : public QRadioButton
{
    Q_OBJECT

public:
    explicit F_checkBox(QWidget *parent = nullptr);

public slots:
    void checkState(bool startB,bool finishB);


    // QWidget interface
protected:
    void mousePressEvent(QMouseEvent *event);
};

#endif // F_CHECKBOX_H
