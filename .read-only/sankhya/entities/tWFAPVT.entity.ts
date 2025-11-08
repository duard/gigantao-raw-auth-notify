import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfpvtEntity } from './tWFPVT.entity';

@Index('PK_TWFAPVT', ['nuele', 'sequencia'], { unique: true })
@Entity('TWFAPVT', { schema: 'SANKHYA' })
export class TwfapvtEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPRN' })
  codprn: number;

  @Column('int', { name: 'VERSAO' })
  versao: number;

  @Column('varchar', { name: 'IDELEMENTO', length: 100 })
  idelemento: string;

  @Column('varchar', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @Column('varchar', { name: 'TIPONOTIFICACAO', length: 1 })
  tiponotificacao: string;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('varchar', { name: 'NOTIFICAGESTOR', length: 1 })
  notificagestor: string;

  @Column('varchar', { name: 'NOTIFICADONO', length: 1 })
  notificadono: string;

  @Column('text', { name: 'EXPRDESTINATARIOS', nullable: true })
  exprdestinatarios: string | null;

  @Column('float', { name: 'DECORRIDO', precision: 53 })
  decorrido: number;

  @Column('int', { name: 'CODSMTP', nullable: true })
  codsmtp: number | null;

  @ManyToOne(() => TwfpvtEntity, (twfpvtEntity) => twfpvtEntity.twfapvts)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele2: TwfpvtEntity;
}
