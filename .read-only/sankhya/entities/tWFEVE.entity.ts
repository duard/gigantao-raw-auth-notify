import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfprnEntity } from './tWFPRN.entity';

@Index('PK_TWFEVE', ['nuevent'], { unique: true })
@Entity('TWFEVE', { schema: 'SANKHYA' })
export class TwfeveEntity {
  @Column('int', { primary: true, name: 'NUEVENT' })
  nuevent: number;

  @Column('varchar', { name: 'DESCREVENTO', nullable: true, length: 100 })
  descrevento: string | null;

  @Column('varchar', { name: 'FORMATO', nullable: true, length: 30 })
  formato: string | null;

  @Column('varchar', { name: 'ONDE', nullable: true, length: 30 })
  onde: string | null;

  @Column('varchar', { name: 'ACAO', nullable: true, length: 30 })
  acao: string | null;

  @Column('varchar', { name: 'QUANDO', nullable: true, length: 30 })
  quando: string | null;

  @Column('text', { name: 'REFERENCIA', nullable: true })
  referencia: string | null;

  @Column('varchar', { name: 'FORMULARIO', nullable: true, length: 100 })
  formulario: string | null;

  @Column('int', { name: 'TIPOACAO', nullable: true })
  tipoacao: number | null;

  @Column('varchar', { name: 'IDELEMENTO', nullable: true, length: 100 })
  idelemento: string | null;

  @ManyToOne(() => TwfprnEntity, (twfprnEntity) => twfprnEntity.twfeves)
  @JoinColumn([
    { name: 'CODPRN', referencedColumnName: 'codprn' },
    { name: 'VERSAO', referencedColumnName: 'versao' },
  ])
  twfprn: TwfprnEntity;
}
