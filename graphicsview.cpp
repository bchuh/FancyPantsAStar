#include <QMouseEvent>
#include <iostream>
#include "graphicsview.h"
#include "mainwindow.h"


graphicsView::graphicsView(QWidget *parent)
    : QGraphicsView(parent),
      mouseEvent_Blocked(false)
{
    QDesktopWidget* desktopWidget = QApplication::desktop();
        //获取可用桌面大小
        QRect deskRect = desktopWidget->availableGeometry();
        int   m_nActScreenY = deskRect.height();
        G_UNIT=90/2160.0*m_nActScreenY;
    std::cout<<"graphcsView constructed"<<std::endl;
    m_scene=new my_scene(this);
    m_scene->setSceneRect(-1,-1,F_WIDTH*G_UNIT+1,F_HEIGHT*G_UNIT+1);
    setScene(m_scene);
    setDragMode(QGraphicsView::ScrollHandDrag);
    setAlignment(Qt::AlignTop | Qt::AlignLeft);
    show();
}

void graphicsView::mousePressEvent(QMouseEvent *event)
{   if(mouseEvent_Blocked==true){
        event->accept();
    }else{
        QGraphicsView::mousePressEvent(event);
        emit flagChanged(m_scene->startB(),m_scene->finishB());
    }
}

void graphicsView::viewReact()
{
    if(m_scene->isNew==false){

        delete m_scene;
        std::cout<<"graphcsView constructed"<<std::endl;
        m_scene=new my_scene(this);
        m_scene->setSceneRect(-1,-1,F_WIDTH*G_UNIT+1,F_HEIGHT*G_UNIT+1);
        setScene(m_scene);
        setDragMode(QGraphicsView::ScrollHandDrag);
        setAlignment(Qt::AlignTop | Qt::AlignLeft);
        show();
        mouseEvent_Blocked=false;
    }else{
        mouseEvent_Blocked=true;
        m_scene->findPathEvent();
        m_scene->isNew=false;
        emit pathFindingFinished(m_scene->PathfindState);
    }
}

