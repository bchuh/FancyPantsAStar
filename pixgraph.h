#ifndef PIXGRAPH_H
#define PIXGRAPH_H

#include <QGraphicsPixmapItem>



class pixgraph : public QGraphicsPixmapItem
{
public:
    pixgraph(const QPixmap &pixmap, QGraphicsItem *parent = Q_NULLPTR);
};

#endif // PIXGRAPH_H
