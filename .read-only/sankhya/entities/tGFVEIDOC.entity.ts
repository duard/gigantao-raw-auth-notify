import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcfdocEntity } from './tCFDOC.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TGFVEIDOC', ['codveiculo', 'coddoc'], { unique: true })
@Entity('TGFVEIDOC', { schema: 'SANKHYA' })
export class TgfveidocEntity {
  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('int', { primary: true, name: 'CODDOC' })
  coddoc: number;

  @Column('datetime', { name: 'VIGENCIAINI', nullable: true })
  vigenciaini: Date | null;

  @Column('datetime', { name: 'VIGENCIAFIN', nullable: true })
  vigenciafin: Date | null;

  @ManyToOne(() => TcfdocEntity, (tcfdocEntity) => tcfdocEntity.tgfveidocs)
  @JoinColumn([{ name: 'CODDOC', referencedColumnName: 'nudoc' }])
  coddoc2: TcfdocEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfveidocs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
