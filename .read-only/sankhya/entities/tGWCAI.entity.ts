import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwsepEntity } from './tGWSEP.entity';
import { TgwcxuEntity } from './tGWCXU.entity';

@Index('PK_TGWCAI', ['nuseparacao', 'codcxu'], { unique: true })
@Entity('TGWCAI', { schema: 'SANKHYA' })
export class TgwcaiEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('varchar', { primary: true, name: 'CODCXU', length: 2 })
  codcxu: string;

  @Column('int', { name: 'QTDCXS' })
  qtdcxs: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tgwcais, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUSEPARACAO', referencedColumnName: 'nuseparacao' }])
  nuseparacao2: TgwsepEntity;

  @ManyToOne(() => TgwcxuEntity, (tgwcxuEntity) => tgwcxuEntity.tgwcais)
  @JoinColumn([{ name: 'CODCXU', referencedColumnName: 'codcxu' }])
  codcxu2: TgwcxuEntity;
}
