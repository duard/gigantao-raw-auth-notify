import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgadigEntity } from './tGADIG.entity';

@Index('PK_TGABD', ['nubd'], { unique: true })
@Index('TGABD_ICONTRATO', ['numcontrato'], {})
@Entity('TGABD', { schema: 'SANKHYA' })
export class TgabdEntity {
  @Column('int', { primary: true, name: 'NUBD' })
  nubd: number;

  @Column('int', { name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('smallint', { name: 'SINAL' })
  sinal: number;

  @Column('float', { name: 'QTD', precision: 53 })
  qtd: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('smallint', { name: 'CODUSUBLOQ', nullable: true })
  codusubloq: number | null;

  @Column('datetime', { name: 'DTALTERBLOQ', nullable: true })
  dtalterbloq: Date | null;

  @Column('smallint', { name: 'CODUSUDES', nullable: true })
  codusudes: number | null;

  @Column('datetime', { name: 'DTALTERDES', nullable: true })
  dtalterdes: Date | null;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgabds)
  @JoinColumn([
    { name: 'NUDIG', referencedColumnName: 'nudig' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgadig: TgadigEntity;
}
