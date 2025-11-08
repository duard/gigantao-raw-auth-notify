import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdfaEntity } from './tGFDFA.entity';

@Index('PK_TGFDFN', ['nunota', 'nufin', 'coddesc'], { unique: true })
@Index('TGFDFN_I01', ['nufin'], {})
@Entity('TGFDFN', { schema: 'SANKHYA' })
export class TgfdfnEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @Column('int', { primary: true, name: 'CODDESC' })
  coddesc: number;

  @Column('float', { name: 'VLRDESC', nullable: true, precision: 53 })
  vlrdesc: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfdfaEntity, (tgfdfaEntity) => tgfdfaEntity.tgfdfns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUFIN', referencedColumnName: 'nufin' },
    { name: 'CODDESC', referencedColumnName: 'coddesc' },
  ])
  tgfdfa: TgfdfaEntity;
}
