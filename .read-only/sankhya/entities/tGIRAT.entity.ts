import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgicabEntity } from './tGICAB.entity';

@Index(
  'PK_TGIRAT',
  ['nuprojeto', 'versaoprojeto', 'tipo', 'chave', 'seqkit', 'seqitem'],
  {
    unique: true,
  },
)
@Entity('TGIRAT', { schema: 'SANKHYA' })
export class TgiratEntity {
  @Column('int', { primary: true, name: 'NUPROJETO' })
  nuprojeto: number;

  @Column('char', {
    primary: true,
    name: 'VERSAOPROJETO',
    length: 15,
    default: () => "' '",
  })
  versaoprojeto: string;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('smallint', { primary: true, name: 'SEQKIT' })
  seqkit: number;

  @Column('smallint', { primary: true, name: 'SEQITEM' })
  seqitem: number;

  @Column('char', { name: 'RATEADO', length: 1, default: () => "'N'" })
  rateado: string;

  @Column('float', { name: 'PERCRATEIO', nullable: true, precision: 53 })
  percrateio: number | null;

  @Column('float', { name: 'VLRRATEIO', nullable: true, precision: 53 })
  vlrrateio: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TgicabEntity, (tgicabEntity) => tgicabEntity.tgirats)
  @JoinColumn([
    { name: 'NUPROJETO', referencedColumnName: 'nuprojeto' },
    { name: 'VERSAOPROJETO', referencedColumnName: 'versaoprojeto' },
  ])
  tgicab: TgicabEntity;
}
