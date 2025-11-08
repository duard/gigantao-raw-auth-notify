import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { TimaclEntity } from './tIMACL.entity';

@Index('PK_TIMAAC', ['aacnufin', 'aacacumulo'], { unique: true })
@Entity('TIMAAC', { schema: 'SANKHYA' })
export class TimaacEntity {
  @Column('int', { primary: true, name: 'AACNUFIN' })
  aacnufin: number;

  @Column('int', { primary: true, name: 'AACACUMULO' })
  aacacumulo: number;

  @Column('datetime', { name: 'AACDTVENC', nullable: true })
  aacdtvenc: Date | null;

  @Column('float', { name: 'AACVLRPRINCIPAL', nullable: true, precision: 53 })
  aacvlrprincipal: number | null;

  @Column('float', { name: 'AACVLRJURO', nullable: true, precision: 53 })
  aacvlrjuro: number | null;

  @Column('float', { name: 'AACVLRMULTA', nullable: true, precision: 53 })
  aacvlrmulta: number | null;

  @Column('float', { name: 'AACVLRCORRMONET', nullable: true, precision: 53 })
  aacvlrcorrmonet: number | null;

  @Column('float', { name: 'AACVLRDESC', nullable: true, precision: 53 })
  aacvlrdesc: number | null;

  @Column('float', { name: 'AACVLRTOTAL', nullable: true, precision: 53 })
  aacvlrtotal: number | null;

  @Column('char', { name: 'AACREPASSEGERADO', nullable: true, length: 1 })
  aacrepassegerado: string | null;

  @Column('float', { name: 'AACVLRIRRF', nullable: true, precision: 53 })
  aacvlrirrf: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timaacs)
  @JoinColumn([{ name: 'AACNUFIN', referencedColumnName: 'nufin' }])
  aacnufin2: TgffinEntity;

  @ManyToOne(() => TimaclEntity, (timaclEntity) => timaclEntity.timaacs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'AACACUMULO', referencedColumnName: 'aclcodigo' }])
  aacacumulo2: TimaclEntity;
}
