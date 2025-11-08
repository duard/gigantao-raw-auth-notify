import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFLSE', ['codlaudo'], { unique: true })
@Index('TGFLSE_IPER', ['nunota'], {})
@Entity('TGFLSE', { schema: 'SANKHYA' })
export class TgflseEntity {
  @Column('int', { primary: true, name: 'CODLAUDO' })
  codlaudo: number;

  @Column('datetime', { name: 'DTMOV', nullable: true })
  dtmov: Date | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('float', { name: 'PERCGERMIN', nullable: true, precision: 53 })
  percgermin: number | null;

  @Column('float', { name: 'PERCPUREZA', nullable: true, precision: 53 })
  percpureza: number | null;

  @Column('varchar', {
    name: 'CONTROLE',
    nullable: true,
    length: 11,
    default: () => "' '",
  })
  controle: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'S'" })
  status: string;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'I'" })
  tipo: string;

  @Column('float', { name: 'PERCVC', nullable: true, precision: 53 })
  percvc: number | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgflses)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgflses)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgflses)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
