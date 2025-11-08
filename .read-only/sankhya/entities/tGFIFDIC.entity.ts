import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffdicEntity } from './tGFFDIC.entity';

@Index('PK_TGFIFDIC', ['idlotefdic', 'codsaque'], { unique: true })
@Entity('TGFIFDIC', { schema: 'SANKHYA' })
export class TgfifdicEntity {
  @Column('int', { primary: true, name: 'IDLOTEFDIC' })
  idlotefdic: number;

  @Column('int', { primary: true, name: 'CODSAQUE' })
  codsaque: number;

  @Column('float', { name: 'VLRPARCELA', nullable: true, precision: 53 })
  vlrparcela: number | null;

  @Column('float', { name: 'VLROPERACAO', nullable: true, precision: 53 })
  vlroperacao: number | null;

  @Column('float', { name: 'VLRSAQUE', nullable: true, precision: 53 })
  vlrsaque: number | null;

  @Column('float', { name: 'VLRCESSAO', nullable: true, precision: 53 })
  vlrcessao: number | null;

  @Column('float', { name: 'TAXAEFETIVA', nullable: true, precision: 53 })
  taxaefetiva: number | null;

  @ManyToOne(() => TgffdicEntity, (tgffdicEntity) => tgffdicEntity.tgfifdics)
  @JoinColumn([{ name: 'IDLOTEFDIC', referencedColumnName: 'idlotefdic' }])
  idlotefdic2: TgffdicEntity;
}
