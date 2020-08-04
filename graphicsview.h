#ifndef GRAPHICSVIEW_H
#define GRAPHICSVIEW_H

#include <QGraphicsView>
#include "my_scene.h"
class graphicsView : public QGraphicsView
{
    Q_OBJECT
private:
    my_scene*m_scene;
    int G_UNIT;
public:
    explicit graphicsView(QWidget *parent = nullptr);
    bool mouseEvent_Blocked;
signals:
    void flagChanged(bool startChecked, bool finishChecked);
    void pathFindingFinished(bool state);
    // QWidget interface
protected:
    void mousePressEvent(QMouseEvent *event);
public slots:
    void viewReact();

};

#endif // GRAPHICSVIEW_H
