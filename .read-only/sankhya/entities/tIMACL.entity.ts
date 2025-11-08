import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimaacEntity } from './tIMAAC.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimlocEntity } from './tIMLOC.entity';
import { TimrelEntity } from './tIMREL.entity';

@Index('PK_TIMACL', ['aclcodigo'], { unique: true })
@Entity('TIMACL', { schema: 'SANKHYA' })
export class TimaclEntity {
  @Column('int', { primary: true, name: 'ACLCODIGO' })
  aclcodigo: number;

  @Column('char', { name: 'ACLESTAGIO', length: 2 })
  aclestagio: string;

  @Column('datetime', { name: 'ACLDTBASE' })
  acldtbase: Date;

  @Column('datetime', { name: 'ACLDTVENC' })
  acldtvenc: Date;

  @Column('float', { name: 'ACLVLRPRINCIPAL', nullable: true, precision: 53 })
  aclvlrprincipal: number | null;

  @Column('float', { name: 'ACLVLRJURO', nullable: true, precision: 53 })
  aclvlrjuro: number | null;

  @Column('float', { name: 'ACLVLRMULTA', nullable: true, precision: 53 })
  aclvlrmulta: number | null;

  @Column('float', { name: 'ACLVLRCORRMONET', nullable: true, precision: 53 })
  aclvlrcorrmonet: number | null;

  @Column('float', { name: 'ACLVLRTOTAL', nullable: true, precision: 53 })
  aclvlrtotal: number | null;

  @Column('float', { name: 'ACLVLRDESC', nullable: true, precision: 53 })
  aclvlrdesc: number | null;

  @Column('float', { name: 'ACLVLRFECHADO', nullable: true, precision: 53 })
  aclvlrfechado: number | null;

  @Column('int', { name: 'ACLNURENEG', nullable: true })
  aclnureneg: number | null;

  @Column('datetime', { name: 'ACLDTINCLUSAO', nullable: true })
  acldtinclusao: Date | null;

  @Column('datetime', { name: 'ACLDTALTERACAO', nullable: true })
  acldtalteracao: Date | null;

  @Column('char', { name: 'ACLPAGADORDESC', length: 1 })
  aclpagadordesc: string;

  @Column('float', { name: 'ACLVLRHONORARIO', nullable: true, precision: 53 })
  aclvlrhonorario: number | null;

  @Column('float', { name: 'ACLVLRIRRF', nullable: true, precision: 53 })
  aclvlrirrf: number | null;

  @Column('float', { name: 'ACLDIFIRRF', nullable: true, precision: 53 })
  acldifirrf: number | null;

  @Column('float', { name: 'ACLVLRGRAVADO', nullable: true, precision: 53 })
  aclvlrgravado: number | null;

  @Column('datetime', { name: 'ACLDTEFETIVA', nullable: true })
  acldtefetiva: Date | null;

  @OneToMany(() => TimaacEntity, (timaacEntity) => timaacEntity.aacacumulo2)
  timaacs: TimaacEntity[];

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timacls)
  @JoinColumn([{ name: 'ACLNUFIN', referencedColumnName: 'nufin' }])
  aclnufin: TgffinEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timacls)
  @JoinColumn([{ name: 'ACLUSUINCLUIU', referencedColumnName: 'codusu' }])
  aclusuincluiu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timacls2)
  @JoinColumn([{ name: 'ACLUSUALTEROU', referencedColumnName: 'codusu' }])
  aclusualterou: TsiusuEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timacls)
  @JoinColumn([{ name: 'ACLCONTRATO', referencedColumnName: 'loccodigo' }])
  aclcontrato: TimlocEntity;

  @OneToMany(() => TimrelEntity, (timrelEntity) => timrelEntity.relacumulo2)
  timrels: TimrelEntity[];
}
