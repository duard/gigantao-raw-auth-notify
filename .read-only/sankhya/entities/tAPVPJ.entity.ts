import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgfveiEntity } from './tGFVEI.entity';

@Index('PK_TAPVPJ', ['codproj', 'codveiculo', 'dhinicial'], { unique: true })
@Entity('TAPVPJ', { schema: 'SANKHYA' })
export class TapvpjEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'CODVEICULO' })
  codveiculo: number;

  @Column('datetime', { primary: true, name: 'DHINICIAL' })
  dhinicial: Date;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapvpjs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tapvpjs)
  @JoinColumn([{ name: 'CODVEICULO', referencedColumnName: 'codveiculo' }])
  codveiculo2: TgfveiEntity;
}
