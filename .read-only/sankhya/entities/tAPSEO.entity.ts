import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TAPSEO', ['codproj', 'idobjeto', 'nometab', 'codserv'], {
  unique: true,
})
@Entity('TAPSEO', { schema: 'SANKHYA' })
export class TapseoEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'IDOBJETO', length: 50 })
  idobjeto: string;

  @Column('int', { primary: true, name: 'CODSERV' })
  codserv: number;

  @Column('float', { name: 'QTDPLA', precision: 53 })
  qtdpla: number;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapseos)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tapseos)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv2: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tapseos)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;
}
