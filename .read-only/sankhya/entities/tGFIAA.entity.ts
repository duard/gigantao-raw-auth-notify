import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFIAA', ['codemp', 'dtref', 'codigo', 'sequencia'], {
  unique: true,
})
@Entity('TGFIAA', { schema: 'SANKHYA' })
export class TgfiaaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'CODIGO', length: 8 })
  codigo: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('char', { name: 'DESCRIAA', nullable: true, length: 255 })
  descriaa: string | null;

  @Column('char', { name: 'INDSUBAPURACAO', nullable: true, length: 1 })
  indsubapuracao: string | null;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfiaas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
