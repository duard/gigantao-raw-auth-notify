import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfdfiEntity } from './tGFDFI.entity';

@Index('PK_TGFDFP', ['codparc', 'coddesc', 'dtinicio'], { unique: true })
@Entity('TGFDFP', { schema: 'SANKHYA' })
export class TgfdfpEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODDESC' })
  coddesc: number;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('money', { name: 'VLRDESC', nullable: true })
  vlrdesc: number | null;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfdfps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfdfps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfdfiEntity, (tgfdfiEntity) => tgfdfiEntity.tgfdfps)
  @JoinColumn([{ name: 'CODDESC', referencedColumnName: 'coddesc' }])
  coddesc2: TgfdfiEntity;
}
